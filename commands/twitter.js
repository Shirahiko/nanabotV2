
const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
  
	name: 'twitter',
	description: 'Zet\'s Twitter',
	execute(message, args) {
            message.channel.send('Yes Master of course. Use this link, it\'ll take you to ours cafés twitter! :two_hearts:');
            const embed = new Discord.RichEmbed()
            .setTitle("ZEST / ゼスト / ビデオアーティスト")
            /*
             * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
             */
            .setColor([244, 0, 84])
            .addBlankField(true)
            .setImage("https://i.imgur.com/iwVz60n.png")
            /*
             * Takes a Date object, defaults to current date.
             */
            .setTimestamp()
            .setURL("https://twitter.com/zestamv")
            .addField(" This is the official Twitter account of ZEST AMV.",
              "I\'m a Music Video Artist specialized in lewd otaku culture.")
            /*
             * Inline fields may not display as inline if the thumbnail and/or image is too big.
             */
            .addBlankField(true)
            .addField("Why should i follow?", "Uncensored videos, WIP, personal updates, room tours, random, announcements...", false)
            /*
             * Blank field, useful to create some space.
             */
            .addBlankField(true)
        
           
            message.channel.send({embed}); 
            message.channel.send(' ... Do i look like google to you? くそがき!');
        }}