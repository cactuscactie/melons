const Discord = require('discord.js');
const client = new Discord.Client();
const rando_melonimgs = [
'https://i5.walmartimages.ca/images/Large/805/2_r/6000196088052_R.jpg',
'https://paradiset.global.ssl.fastly.net/media/catalog/product/cache/c9e0b0ef589f3508e5ba515cde53c5ff/m/e/melon-cantaloupe-5afc34959bf45.jpg',
'https://static.mathem.se/shared/images/products/large/melon-snoboll-klass1-2.jpg',
]

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
   if (message.content === "melon") {
        message.channel.send("Who doesn't love a good batch of melons?", {file: rando_melonimgs[Math.floor(Math.random() * rando_melonimgs.length)]});
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
