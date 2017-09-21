
exports.run = (bot, message, args) => {
    if(!args.length) {
        message.channel.createMessage("Come on, say something!")
        return
    } else {
        message.channel.createMessage(args.join(' '));
    }
};
exports.conf = {
    aliases:[],
    guildOnly: false
};
exports.help = {
    name: 'Say',
    description: 'I\'m not sure',
    usage: 'gm:say <things>',
};
