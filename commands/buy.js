const Discord = require('discord.js');
const db = require ('quick.db');

module.exports = {
    name: 'buy',   
    aliases: ['menu'],
    cooldown: 8,
	description: 'Buy something from our shop.',
    execute(message , args) {

       if(!args.length) { 
        var embed = new Discord.RichEmbed()
        .setAuthor('Welcome to our Café.')
        .setTitle ('Menu')
        .setColor([244, 0, 84])
        .setDescription('Take all the time you need to look through our Menu.')
       
        .addField('Food', `
        🥞     Pancake
        🥚     Omelette
        🍛     Curry 
        🍰     Cake
        
        `, true)
        .addField('Price', `
        100¥   🥞 
        150¥   🥚 
        200¥   🍛
        150¥   🍰 
        `, true)
        .addBlankField(false)
        .addField('Drinks',
        `🍵  Tea 
        ☕ Coffee 
        `, true)

        .addField('Price', `
        50¥   🍵
        50¥   ☕
        `, true)
        .addBlankField(false)
        .addField('Dessert',
        `🍡  Dango 
        🍧  Shaved Ice 

        `, true)
        .addField('Price', `
        100¥   🍡
        200¥   🍧
        `, true)

        message.channel.send('If you know what you want, please write "Nana? buy [item]" ! 💕 ')
        message.channel.send(embed);
        return;


        }

        let newItemName = args.join(" ");

        let item = null;

        let itemData = {
            items: [ 
             
                { 
                    name : "pancake",
                    description : "Sweet Pancakes with maple syrup.",
                    price : 100
        
                },
        
                {
                    name : "omelette",
                    description : "Homemade Omelette for you.",
                    price : 150
        
                },


                {
                    name : "curry",
                    description : "Some hot nice Curry.",
                    price : 200
        
                },

                {
                    name : "cake",
                    description : "Sweet strawberry cheese cake",
                    price : 150
        
                },

                {
                    name : "dango",
                    description : "Nice colorful Dango.",
                    price : 100
        
                },

                {
                    name : "shaved ice",
                    description : "Cold Shaved Ice with Strawberry flawored topping.",
                    price : 100
        
                },
        
                {
                    name : "tea",
                    description : "Homebrewed tea, sweetened to your liking.",
                    price :  50
                },

                {
                    name : "coffee",
                    description : "Homebrewed coffee.",
                    price : 50
                }

            ]
            }
        

        itemData.items.forEach(element => {
            if(element.name == newItemName.toLowerCase()) {
                item = element;
            }            


        });

        if (item === null){
            

       message.channel.send(`Uhh.. sorry, ${message.author.username} we don't have **${newItemName}** in our menu.`);

          return;

        }    

        let balance = db.get(`${message.author.id}.money`)

        if(balance < item.price){

            message.channel.send(`Uhh.. sorry ${message.author.username}  ${newItemName} costs **${item.price}¥**  but you only have **${balance}¥** .`);

            return;


        }  
        db.add(`${message.author.id}.money`, -item.price);
        db.push(`${message.author.id}.items`, item.name);

        message.channel.send(`Sure, ${message.author.username} ! Here is your **${newItemName}**! That'll be ** ${item.price}¥**. Enjoy. 💕 `);
       





    }

}