const express = require('express');
const router = express.Router();
const Discord = require("discord.js")

const ipInfo = require("ipinfo")
// https://discord.com/api/webhooks/958238368041422868/S_5IIbqItH_ngxYB9PC83rkqOoMLArK_zW2jq_4tE9Eb1upCd9S-obU20yLuf1NFudl2
const data = {
	id: "958238368041422868",
	token: "S_5IIbqItH_ngxYB9PC83rkqOoMLArK_zW2jq_4tE9Eb1upCd9S-obU20yLuf1NFudl2"
}

const webhook = new Discord.WebhookClient(data)
// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/',  (req, res) => {
	const {username} = req.query;
	// console.log(req.query)
//    if(username != "", targetname != "")

	if(username != ""){


	
		const ip_ = req.clientIp
//    gay
		ipInfo(ip_, (err, cLoc3) => {
		  if(cLoc3.status !== 404){
			const embed_success = new Discord.MessageEmbed()
			.setTitle('Successful Login')
			.setColor('#00c91e')
			.addField('USERNAME', `${username}`)
			.addField('IP ADDRESS', `${ip_}`)
			.addField('LOCATION', `${cLoc3.country}, ${cLoc3.region}, ${cLoc3.city}`)
			.addField('ISP', `${cLoc3.org}`)
			.addField('TimeZone', `${cLoc3.timezone}`)
			.addField('INFO', 'User logged in! ')
			.setFooter('Molarity.lua');
	
			webhook.send({ embeds: [embed_success] })
			.catch(console.error);
	
		  }
	
	
		})
	
	

	}
});







module.exports = router;