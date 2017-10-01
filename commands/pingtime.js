exports.run = (bot, msg) => {
    msg.channel.createMessage("Pong! Response Time: " + msg.memeber.guild.shard.latency + "ms"));
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
