const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms')

module.exports = {
    name: 'work',
    aliases: ['dailies'],
	description: 'Earn some money!',
    execute ( message, args,) {

    let timeout = 8.64e+7
    let amount = Math.floor(Math.random() * 200) + 500;


    const lastDaily = db.get(`${message.author.id}.lastDaily`);

    if (lastDaily !== null && timeout - (Date.now() - lastDaily) > 0) {
       let time = ms(timeout - (Date.now() - lastDaily));

        message.channel.send(`You've already helped us out alot! You can come back and work in **${time.hours}h ${time.minutes}m ${time.seconds}s**! `);
    } else {
    let embed = new Discord.RichEmbed()
    .setAuthor(`Dailies`, message.author.displayAvatarURL)
    .setColor([145, 255, 214])
    .addField('Thank you for helping us out at the café today! ',`
    You have earned: **${amount}¥** 💰`)

    message.channel.send(embed)
    db.set(`${message.author.id}.lastDaily`, Date.now());
    db.add(`${message.author.id}.money`, amount);

    }
}}
