exports.run = (bot, msg) => {
    msg.channel.createMessage('pong');
};
exports.conf = {
    aliases:[],
    guildOnly: false
};
exports.help = {
    name: 'Ping',
    description: 'I\'m not sure',
    usage: 'gm:ping',
};
