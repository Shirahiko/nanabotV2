const Discord = require('discord.js');

module.exports = {
    name: 'hi',
    aliases: ['hey', 'hello', 'sup','hi'],
	description: 'question:',
    execute(message, args){
    
   
    let replies = ["Hi.", "Hello." , "...", "Hii~", "Welcome home, master!"]

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(1).join("");

    if(!args[0]) return message.channel.send(replies[result]);
}
}