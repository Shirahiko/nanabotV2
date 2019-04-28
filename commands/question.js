const Discord = require('discord.js');

module.exports = {
    name: 'question:',
    aliases: ['q', 'question'],
	description: 'question:',
    execute(message, args){
    
    if(!args[2]) return message.reply("Is that supposed to be a question?");
    let replies = ["Yeah.", "No!" , "Uh... no.", "Maybe~.", "Oof, let me think of that first."]

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(1).join("");

    message.channel.send(replies[result]);
}
}