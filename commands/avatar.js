exports.run = (bot, message) => {
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
};
exports.conf = {
   aliases:[],
   guildOnly: false
};
exports.help = {
   name: 'Avatar',
   description: 'Shows an avatar',
   usage: 'gm:avatar <mention>',
};
