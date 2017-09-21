const Eris = require('eris');
const fs = require('fs');
const config = require('./config.json');

var bot = new Eris(config.token);
bot.getBotGateway().then(result => {
    let shards = result.shards;
    bot.options.maxShards = shards;
});

function setGame() {
    var games = [
        "ChromeBot",
        "testing",
		"with tyson"
    ]

    bot.editStatus('online', {name: games[Math.floor(Math.random() * games.length)], type: 0});
}

bot.commands = new Eris.Collection();
bot.aliases = new Eris.Collection();

fs.readdir('./commands/', (err, files) => {
    if (err) console.error(err);
    console.log(`Attempting to load a total of ${files.length} commands into the memory.`, false);
    files.forEach(file => {
        try{
            let command = require(`./commands/${file}`);
            console.log(`Attempting to load the command "${command.help.name}".`, false);
            bot.commands.set(command.help.name, command);
            command.conf.aliases.forEach(alias => {
                bot.aliases.set(alias, command.help.name);
                console.log(`Attempting to load "${alias}" as an alias for "${command.help.name}"`, false);
            });
        }
        catch(err){
            console.log('An error has occured trying to load a command. Here is the error.');
            console.log(err);
        }
    });
    console.log('Command Loading complete!');
});

bot.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./commands/${command}`)];
            let cmd = require(`./commands/${command}`);
            bot.commands.delete(command);
            bot.aliases.forEach((cmd, alias) => {
                if (cmd === command) bot.aliases.delete(alias);
            });
            bot.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                bot.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e){
            reject(e);
        }
    });
};
bot.on('ready', () => {
    console.log(`=======================================\n`,
            `=======================================\n`);
    setGame();
    bot.setInterval(setGame, 200000);
});

bot.on('messageCreate', (msg) => {
    let prefix = config.prefix
    let args = msg.content.slice(prefix.length).trim().split(/ +/g);
    let command = args.shift();
    console.log(args);
    let cmd;
    if (bot.commands.has(command)) {
        cmd = bot.commands.get(command);
    } else if (bot.aliases.has(command)) {
        cmd = bot.commands.get(bot.aliases.get(command));
    }
    if (cmd) {
        try{
            cmd.run(bot, msg, args);
        }
        catch(e){
            msg.channel.createMessage({ embed: bot.errorMessage(bot, e.stack) });
        }
    }
});

bot.connect();
