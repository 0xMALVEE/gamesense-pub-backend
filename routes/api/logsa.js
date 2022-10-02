const express = require('express');
const router = express.Router();
const Discord = require("discord.js")



const images_bg = [
    "https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?size=626&ext=jpg",
    "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg",
    "https://wallpaperaccess.com/full/1622640.jpg",
    "https://i.pinimg.com/originals/bf/82/f6/bf82f6956a32819af48c2572243e8286.jpg",
    "https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg"
]

const images_avatar = [
    "https://i.pinimg.com/originals/f4/39/37/f439373d7aea8c2922b4f7fcc312d9f8.gif",
    "https://c.tenor.com/cz070y7kKJkAAAAC/anime-anime-girl.gif",
    "https://data.whicdn.com/images/347650293/original.gif",
    "https://www.icegif.com/wp-content/uploads/anime-icegif-11.gif",
    "https://i.pinimg.com/originals/37/b5/aa/37b5aa0cda97c496727f9311f55eaff2.gif"
]

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/hit',  (req, res) => {
	const {username,targetname,hitbox,dmg,hc,backtrack,boost,webhooklink, brandname} = req.query;
	// console.log(req.query)
//    if(username != "", targetname != "")
	console.log(webhooklink.length)
	if(webhooklink.length == 120 && username != ""&& targetname != ""&& hitbox != "empty"&& dmg != ""&& hc != ""&& backtrack!=""&& boost!="" && brandname != ""){


	
    

    const id = webhooklink.slice(33,51)
    const token = webhooklink.slice(52,webhooklink.length)

    const data = {
        id: id,
        token: token
    }
	
    
    const webhook = new Discord.WebhookClient(data)
 
	// console.log(targetname)
	// console.log(hitbox)
	// console.log(dmg)
	// console.log(hc)
	// console.log(backtrack)
	// console.log(boost)
    // res.send("gay")

    const hit_logs = new Discord.MessageEmbed()

	.setTitle(`${brandname}`)
	.setDescription('User hit logs')
	.addField('User', username)
	.setColor('#17ff55')
	.setAuthor(username, images_avatar[Math.floor(Math.random() * 4)])
	.addFields(
		{ name: 'Target', value: targetname,inline: true },
		{ name: 'Hitbox', value: hitbox, inline: true },
		{ name: 'Damage', value: `${dmg}`, inline: true },
	)
	.addFields(
		{ name: 'Hitchance', value: `${hc}`,inline: true },
		{ name: 'Backtrack', value: `${backtrack}`, inline: true },
		{ name: 'Boosted', value: boost, inline: true },
	)
	.setThumbnail(images_bg[Math.floor(Math.random() * 4)])
	.addField('More Info', `${username} hit ${targetname} at ${hitbox} with ${hc} hc`)

	.setFooter(`${brandname}`);

	
    webhook.send({ embeds: [hit_logs] })
	.catch(console.error);
  
	res.send("DONE")
	

	}
});



router.get('/miss',  (req, res) => {
	const {username,targetname,hitbox,dmg,hc,backtrack,boost,reason,webhooklink, brandname} = req.query;
	if(webhooklink.length == 120 && username != ""&& targetname != ""&& hitbox != "empty"&& dmg != ""&& hc != ""&& backtrack!=""&& boost!="" && brandname != ""){

	console.log("MISSa")
    const id = webhooklink.slice(33,51)
    const token = webhooklink.slice(52,webhooklink.length)

    const data = {
        id: id,
        token: token
    }
    
    const webhook = new Discord.WebhookClient(data)

	// console.log(targetname)
	// console.log(hitbox)
	// console.log(dmg)
	// console.log(hc)
	// console.log(backtrack)
	// console.log(boost)
    // res.send("gay")

    const miss_logs = new Discord.MessageEmbed()

	.setTitle(`${brandname}`)
	.setDescription('User miss logs')
	.addField('User', username)
	.setColor('#f20c0c')
	.setAuthor(username, images_avatar[Math.floor(Math.random() * 4)])
	.addFields(
		{ name: 'Target', value: targetname,inline: true },
		{ name: 'Hitbox', value: hitbox, inline: true },
		{ name: 'Damage', value: `${dmg}`, inline: true },
	)
	.addFields(
		{ name: 'Hitchance', value: `${hc}`,inline: true },
		{ name: 'Backtrack', value: `${backtrack}`, inline: true },
		{ name: 'Boosted', value: boost, inline: true },
	)
	.setThumbnail(images_bg[Math.floor(Math.random() * 4)])
	.addField("Reason", `miss due to ${reason}`)
	.addField('More Info', `${username} hit ${targetname} at ${hitbox} with ${hc} hc`)

	.setFooter(`${brandname}`);

    webhook.send({ embeds: [miss_logs] })
	.catch(console.error);
  
	res.send("DONE")

	}
});



module.exports = router;