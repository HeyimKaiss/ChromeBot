exports.run = (bot, msg, args) => {
    msg.channel.purge(args[0])
};
exports.conf = {
    aliases:[],
    guildOnly: false
};
exports.help = {
    name: 'PingTime',
    description: 'I\'m not sure',
    usage: 'gm:pingtime',
};
