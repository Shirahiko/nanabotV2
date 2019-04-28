const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms')
const weightedlist = require('../weighted-list');

module.exports = {
    name: 'lottery',
    aliases: ['lottery'],
    cooldown: 10,
	description: 'try your luck',
    execute ( message, args,) {




        let balance = db.get(`${message.author.id}.money`)

        if(balance < 100){
        
            message.channel.send(`Uhh.. sorry ${message.author.username}  you need atleast **100¥** to play this game...`);
		return;}
        
 const array = [['a', 100000],  
    ['b', 20000],
    ['c', 20000],
    ['d', 10000],
    ['e',  9000]];
    //['f',  1]];

weightedlist.pushAll(array);

var result = weightedlist.getRandom();   

if (result === 'a') {
message.channel.send('Oh no.. seems like you won nothing.');


} else if ( result === 'b') {

message.channel.send(`Oh. You've won 50¥. That's okay I guess.`);
db.add(`${message.author.id}.money`, 50); 

} else if (result === 'c') {

message.channel.send(`Oh. You've won a kiss.. just kidding. Here you go, 100¥`);
db.push(`${message.author.id}.items`, 100);

} else if (result === 'd') {

    message.channel.send(`Oh. You've won a kiss.. just kidding. Here you go, 300¥`);
    db.push(`${message.author.id}.items`, 300);

} else if (result === 'e') {

message.channel.send(`Not Bad! You are quiet luck! Here you go. 1000¥`);
db.add(`${message.author.id}.money`, 1000); }


//} else if (result === 'f') {
//message.channel.send(`Oh wow, Jackpot. You are some lucky guy aren't you? Here is your brand new role.`);
//}

else message.channel.send('Oh no.. seems like you won nothing.');

db.add(`${message.author.id}.money`, -100);


}



}



;
