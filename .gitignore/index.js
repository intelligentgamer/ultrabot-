const Discord = require ("discord.js")
const client = new Discord.Client()
var prefix = "ub!!";
client.login("NDQ4NTc5NDQwMTU5NzUyMTky.Ded6Sw.yg3IlLXlGc9EtJ86L7v7llC668U")

client.on("ready", function() {
    client.user.setActivity("ub!!", {type:"PLAYING"})
    console.log("Bot Ready")

    
})
