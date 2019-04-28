const Discord = require('discord.js')
const db = require('quick.db')
const client = new Discord.Client();

module.exports = {
    name: 'balance',
	description: 'question:',
    execute( message, args) {

        var balance = db.get(`${message.author.id}.money`)
        var embed = new Discord.RichEmbed()

        .setTitle(`Seems like you've got ${balance}¥ left to spend in our café. 💕`)
        .setDescription("and now leave me alone xd")
        .setColor([244, 0, 84])
      

    
       
        message.channel.send({embed}); 

        
    
      
    }

}