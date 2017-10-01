exports.run = (bot, message, args) => {
    if(!args.length) {
        message.channel.createMessage("ask me!")
        break
    } else {
        var choices = ["Yeah.", "Nope.", "Maybe.", "yes.","no."]
        var rand = choices[Math.floor(Math.random() * choices.length)];
        message.channel.createMessage(rand)
        break;
    }
};
exports.conf = {
    aliases:[],
    guildOnly: false
};
exports.help = {
    name: 'Question',
    description: 'I\'m not sure',
    usage: 'gm:question',
};
