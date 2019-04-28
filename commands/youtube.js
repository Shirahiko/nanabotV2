
const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
  
	name: 'youtube',
	description: 'Zest\'s Youtube',
	execute(message, args) {
            message.channel.send('Our cafes cinema can be reached here: :two_hearts: ');
            const embed = new Discord.RichEmbed()
            .setTitle("ZEST AMV is the youtube channel of ZEST & Shirahiko")
            /*
             * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
             */
            .setColor([244, 0, 84])
            .addBlankField(true)
            .setImage("https://i.imgur.com/77niCmr.png")
            /*
             * Takes a Date object, defaults to current date.
             */
            .setTimestamp()
            .setURL("https://www.youtube.com/channel/UCAo6nC6I9yk2X4xqQThhhew")
            .addField("What should i expect?",
              "Lewd AMVs, MMVs & Duo-Livestreams")
            /*
             * Inline fields may not display as inline if the thumbnail and/or image is too big.
             */
            .addBlankField(true)
            .addField("Is ZEST A GIRL OR A BOY?!", "Zest-sama is a Boy, Shirahiko-sama is a Girl.", false)
            /*
             * Blank field, useful to create some space.
             */
            .addBlankField(true)
        
           
            message.channel.send({embed}); 
            message.channel.send(' ... Do i look like google to you? くそがき!');
        }}