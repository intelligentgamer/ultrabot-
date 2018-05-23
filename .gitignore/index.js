const Discord = require ("discord.js")
const client = new Discord.Client()
var prefix = "ub!!";
client.login("token")

client.on("ready", function() {
    client.user.setActivity("ub!!", {type:"PLAYING"})
    console.log("Bot Ready")

    
})
