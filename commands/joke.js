exports.run = (bot, message, args) => {
    if(!args.length) {
        message.channel.createMessage("please type (gm:joke !) to get a joke")
        return;
    }  else {
        var choices = ["once a cat was walking and then you looked", "HK:Hello Kitty", "you are here asking me for a joke", "meow","You just Looked"]
        var rand = choices[Math.floor(Math.random() * choices.length)];
        message.channel.createMessage(rand)
        return;
    }
};
exports.conf = {
    aliases:[],
    guildOnly: false
};
exports.help = {
    name: 'Joke',
    description: 'I\'m not sure',
    usage: 'gm:joke <args>',
};
