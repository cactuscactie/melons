const Discord = require('discord.js');
const client = new Discord.Client();
const rando_melonimgs = [
'https://i5.walmartimages.ca/images/Large/805/2_r/6000196088052_R.jpg',
'https://paradiset.global.ssl.fastly.net/media/catalog/product/cache/c9e0b0ef589f3508e5ba515cde53c5ff/m/e/melon-cantaloupe-5afc34959bf45.jpg',
'https://static.mathem.se/shared/images/products/large/melon-snoboll-klass1-2.jpg',
'https://www.rareseeds.com/assets/1/14/DimRegular/Melon-Heart-of-Gold-DSC07333.jpg',
'http://halalfoodie.ca/wp-content/uploads/2016/06/Screen-Shot-2016-06-09-at-11.36.06-PM-700x466.png',
'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-546041.jpg',
'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-176338.jpg',
'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-83969.jpg',

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
    
    if (message.content === "MELON") {
        message.channel.send("WHO DOESN'T LOVE A GOOD BATCH OF MELONS?", {file: rando_melonimgs[Math.floor(Math.random() * rando_melonimgs.length)]});
    }
    
    if (message.content === "Melon") {
        message.channel.send("Who doesn't love a good batch of melons?", {file: rando_melonimgs[Math.floor(Math.random() * rando_melonimgs.length)]});
    }
    
    if(message.content === "m8") {
        message.channel.send("wot the fok did ye just say 2 us, man? i dropped out of newcastle primary skool im the sickest bloke ull ever meet & ive nicked 300 chocolate globbernaughts from tha corner shop. im trained in street fitin’ & im the strongest foker in tha entire newcastle gym. yer nothin to me but a cheeky lil dickhead w/ a hot mum & fake bling. ill waste u and smash a fokin bottle oer yer head bruv, i swer 2 christ. ya think u can fokin run ya gabber at me while sittin on yer arse behind a lil screen? think again wanka. im callin me homeboys rite now preparin for a proper rumble. tha rumble thatll make ur nan sore jus hearin about it. yer a waste bruv. my homeboys be all over tha place & ill beat ya to a proper fokin pulp with me fists wanka. if i aint satisfied w/ that ill borrow me m8s cricket paddle & see if that gets u the fok out o’ newcastle ya daft kunt. if ye had seen this bloody fokin mess commin ye might a’ kept ya gabber from runnin. but it seems yer a stewpid lil twat, innit? ima shite fury & ull drown in it m8. ur in proper mess ya knobhead.");
    }
    
    if(message.content === "cj stina"){
        message.channel.send("Enjoy a piece of history!", {files: ["./images/IMG_2853.JPG"]});
    }
    
    if(message.content === "Cj Stina"){
        message.channel.send("Enjoy a piece of history!", {files: ["./images/IMG_2853.JPG"]});
    }
    
    if(message.content === "Cj stina"){
        message.channel.send("Enjoy a piece of history!", {files: ["./images/IMG_2853.JPG"]});
    }
    
    if(message.content === "CJ STINA"){
        message.channel.send("ENJOY A PIECE OF HISTORY!", {files: ["./images/IMG_2853.JPG"]});
    }
    
    if(message.content === "cj Stina"){
        message.channel.send("Enjoy a piece of history!", {files: ["./images/IMG_2853.JPG"]});
    }

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
