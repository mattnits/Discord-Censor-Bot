const TOKEN = "NjY1Njg1OTY5OTExMTUyNjgx.XhpPMA.8VsW8D2I3V2k1GZWNU7OoeEgcFk"
const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connected as " + client.user.tag);

    client.user.setActivity("Cops", {type: "WATCHING"});

    /*client.guilds.forEach((guild) => {
        guild.channels.forEach((channel) => {
            console.log(` - ${channel.name} ${channel.type} ${channel.id}`)
        })
    })*/

    let generalChannel = client.channels.get("655552428569002009");
    let wow = client.channels.get("615641028061560842")

    generalChannel.members.forEach(member => console.log(member.user.id + " Name: " + member.user.username));
    
});

client.on('message', (recievedMessage) => {
    if (recievedMessage.author == client.user) {
        return;
    }
    let userid = recievedMessage.author.id

    console.log(recievedMessage.content)
    if (recievedMessage.content.includes("fuck")) {
        recievedMessage.delete();
        recievedMessage.channel.send("This message has been flagged for inappropriate language");
    }
    else if (userid == "") {
        recievedMessage.channel.send("This message has been flagged for inappropriate language");
        recievedMessage.delete();
    }

    if (userid == "367485671650230273") {
        recievedMessage.channel.send("Welcome back!");
    }

});

client.login(TOKEN);