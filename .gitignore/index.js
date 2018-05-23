const Discord = require ("discord.js")
const client = new Discord.Client()
var prefix = "ub!!";
client.login("NDQ4NTc5NDQwMTU5NzUyMTky.Ded7aw.iThaCX0gnYCGkp61hsevRCXSatU")

client.on("ready", function() {
    client.user.setActivity("ub!!", {type:"PLAYING"})
    console.log("Bot Ready")

    
})
