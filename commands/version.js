exports.run = (bot, msg) => {
	message.channel.createMessage("The Current Version of ChromeBot is " + bot.ver)
};
exports.conf = {
    aliases:[],
    guildOnly: false
};
exports.help = {
    name: 'Version',
    description: 'I\'m not sure',
    usage: 'gm:version',
};
