const fs = require('fs');
const db = require('quick.db')
const Discord = require('discord.js');
const { prefix } = require('./config.json');
const cooldowns = new Discord.Collection();

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {

    let allUsers = client.users.array();
    for(let i = 0; i < allUsers.length; i++){

        if( db.get(allUsers[i].id) === null ){ 

            db.set(allUsers[i].id,{money: 50, items: [ ]})
        }

    }

    client.user.setActivity("at the café", {type: 'PLAYING', url:'https://www.youtube.com/channel/UCAo6nC6I9yk2X4xqQThhhew'});

	console.log('Ready!')
});

client.on("guildMemberAdd", member => {

if( db.get(member.id) === null) { 

    db.set(member.id,{money: 50, items: [ ]})
}

})

client.on('message', message => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;
        
	const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    
    const command = client.commands.get(commandName)
    		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    
        if (!command) return;
        
    if (command.args && !args.length) {
        		return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
            }
            
            if (!cooldowns.has(command.name)) {
                cooldowns.set(command.name, new Discord.Collection());
            }
            
            const now = Date.now();
            const timestamps = cooldowns.get(command.name);
            const cooldownAmount = (command.cooldown) * 1000;
            
            if (timestamps.has(message.author.id)) {
                const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

                if (now < expirationTime) {
                    const timeLeft = (expirationTime - now) / 1000;
                    return message.reply(`Stop requesting me so often! Wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.💢`);
                
                }
            }


            timestamps.set(message.author.id, now);
            setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);


    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
       
});

client.login(process.env.token);
