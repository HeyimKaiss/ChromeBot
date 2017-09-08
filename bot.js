const Discord = require('discord.js');
const client = new Discord.Client()
const config = require('./config.json')

// Variables for config.json
var token = config.bot_token
var prefix = config.prefix
var ver = config.version

 // Bot user status
function setGame() {
    var games = [
        "ChromeBot",
        "testing",
		"with tyson"
    ]

    client.user.setPresence({
        status: 'online',
        afk: false,
        game: {
            type: 0,
            name: games[Math.floor(Math.random() * games.length)]
        }
    })
}

// Bot ready
client.on("ready", () => {
    console.log(`=======================================\n`,
                `=======================================\n`);
    
    setGame();
    client.setInterval(setGame, 200000);
})

client.login(token)

client.on("message", function(message) {

    if (message.author.equals(client.user)) return;

    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        //ping command
        case "ping":
            message.channel.send("pong!")
            break;
        case "pingtime":
            message.channel.send("Pong! Response Time: " + client.ping + "ms")
            break;
		case "chrome":
		   
			 break;
	    case "avatar":
		 if (message.mentions.users.first()) {
            	var mentionmembers = message.mentions.members.first()
            	var mentionusers = message.mentions.users.first()
            	var embed = new Discord.RichEmbed()
            		.setAuthor("The user's avatar is")
                    .setImage(mentionusers.displayAvatarURL)
					.setColor("#1E90FF")
            	message.channel.send({embed})
            } else {
                var embed = new Discord.RichEmbed()
                    .setAuthor("Your Current Avatar is")
                    .setImage(message.author.displayAvatarURL)
					.setColor("#1E90FF")
                message.channel.send({embed})
            }
            break;
			
     case "purge":
  const user = message.mentions.users.first();
const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
if (!amount) return message.reply('Must specify an amount to delete!');
if (!amount && !user) return message.reply('Must specify a user and amount, or just an amount, of messages to purge!');
message.channel.fetchMessages({
 limit: amount,
}).then((messages) => {
 if (user) {
 const filterBy = user ? user.id : Client.user.id;
 messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
 }
 message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
});

break;
		case "help":
            var embed = new Discord.RichEmbed()
                .setAuthor("Help DM")
                .setDescription("Sent you a DM With a List of commands")
                .setColor("#1E90FF")
            message.channel.send({embed});

            var embed = new Discord.RichEmbed()
		  var embed = new Discord.RichEmbed()
                .setAuthor("Help Guide")
                .setDescription("To execute one of my commands you have to type in gm: first")
                .addField("General Commands", "ping\npingtime\nchrome\navatar\nuptime\nversion\npurge", true)
                .addField("Music Commands", "play\nskip\nstop\nvol\nsummon\npause\nresume", true)
		.addField("Fun Commands", "joke\nsay\nask", true)
                .setColor("#1E90FF")   
           message.author.send({embed});		
            break;
		case "uptime":
		embed = new Discord.RichEmbed()
		var time;
		var uptime = parseInt(client.uptime);
		uptime = Math.floor(uptime / 1000);
        var uptimeMinutes = Math.floor(uptime / 60);
        var minutes = uptime % 60;
        var hours = 0;
        while (uptimeMinutes >= 60) {
            hours++;
            uptimeMinutes = uptimeMinutes - 60;
        }
		var uptimeSeconds = minutes % 60;
		var days = Math.floor(hours / 24);
            embed.setDescription("ChromeBot is active since " + days + " days, " + hours + " hours, " + uptimeMinutes + " minutes, and " + uptimeSeconds + " seconds.")
            embed.setColor("#1E90FF")
        message.channel.send({ embed })
		break;
		case "version":
		message.channel.send("The Current Version of ChromeBot is " + ver)
		break;
		 case "say":
		   try {
                    if(message.content.length < prefix.length + 4) {
                        message.channel.send("Come on, say something!")
                        break
                    } else { 
							message.channel.send(message.content.replace(prefix + "say ", ''));
					message.delete();
							}
					} catch(err) {
						message.channel.send(error)
					}
            break;
			 case "question":
			if(message.content.length < prefix.length + 6) {
                message.channel.send("ask me!")
                break
            } else {        
                var choices = ["Yeah.", "Nope.", "Maybe.", "yes.","no."]
                var rand = choices[Math.floor(Math.random() * choices.length)];                    
                message.reply(rand)  
                break;
            }
			 case "joke":
			if(message.content.length < prefix.length + 6) {
                message.channel.send("please type (gm:joke !) to get a joke")
                break;
            }  else {        
                var choices = ["once a cat was walking and then you looked", "HK:Hello Kitty", "you are here asking me for a joke", "meow","You just Looked"]
                var rand = choices[Math.floor(Math.random() * choices.length)];                    
                message.reply(rand)  
                break;
			}	
}
})
