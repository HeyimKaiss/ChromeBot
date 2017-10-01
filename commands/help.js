exports.run = (bot, msg) => {
    var embed = {
        author: {name: "Help Guide"},
        description: "To execute one of my commands you have to type in gm: first",
        fields:[
            {
                name: "General Commands",
                value: "ping\npingtime\nchrome\navatar\nuptime\nversion\npurge",
                inline: true
            },
            {
                name: "Fun Commands",
                value: "joke\nsay\nask",
                inline: true
            }
        ],
        color: 0x1E90FF
    }
    msg.channel.createMessage({embed});
};
exports.conf = {
    aliases:[],
    guildOnly: false
};
exports.help = {
    name: 'Help',
    description: 'I\'m not sure',
    usage: 'gm:help',
};
