exports.run = (bot, msg) => {
    var time;
    var uptime = parseInt(bot.uptime);
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
    var embed = {
        description: "ChromeBot is active since " + days + " days, " + hours + " hours, " + uptimeMinutes + " minutes, and " + uptimeSeconds + " seconds."
    }
    msg.channel.createMessage({embed});
};
exports.conf = {
    aliases:[],
    guildOnly: false
};
exports.help = {
    name: 'Uptime',
    description: 'I\'m not sure',
    usage: 'gm:uptime',
};
