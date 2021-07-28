let Discord = require('discord.js')
let bot = new Discord.Client();
const fs = require('fs');
bot.commands = new Discord.Collection();

let rawdata = fs.readFileSync('database.json');
let config = JSON.parse(rawdata);
let Setup = require('./commands/New Guild Config/New Guild Setup')

const filesrc = require('./filesrc')
filesrc.execute(bot)

bot.on('ready',async () => {
	console.log(`Logged in as ${bot.user.tag}!`);
 });

 bot.on("guildCreate", (guild) => {
    let guildId = guild.id
    // This event triggers when the bot joins a guild.    
    console.log(`Joined new guild: ${guild.name}`);
    if(!config["guildIds"].includes(guildId)) bot.commands.get('New Guild Setup').execute(fs,bot,Discord,config,guildId)
});

bot.on('message', (message) =>{
    let guildId = message.guild.id
    console.log("Message from, Guild Id : "+guildId)
    if(!config["guildIds"].includes(guildId)) bot.commands.get('New Guild Setup').execute(fs,bot,Discord,config,guildId)
    
    let ind = config["guildIds"].indexOf(guildId)
    prefix = config["prefix"][ind]

    if(message.content.startsWith(prefix))
    {
        if(message.author.bot)return;
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(`You Don't Have Admin Permissions...!!`)
        words = message.content.split(' ')
        cmd = words[0].slice(1)
        
        let data = JSON.stringify(config);
        //Save the file
        fs.writeFileSync('database.json', data);

        if(cmd === "role")
        {
            bot.commands.get('role').execute(bot,message,Discord)
            console.log(cmd)
        }
        
        if(cmd === "crole")
        {
            bot.commands.get('createroles').execute(bot,message,Discord)
            console.log(cmd)
        }

        if(cmd === "rinfo")
        {
        bot.commands.get('rinfo').execute(bot,message,Discord)
        console.log(cmd)
        }

        if(cmd === "rmr")
        {
        bot.commands.get('rmr').execute(bot,message,Discord)
        console.log(cmd)
        }
        
        if(cmd === "clear")
        {
        bot.commands.get('clear').execute(bot,message,Discord)
        console.log(cmd)
        }

        if(cmd === "set pref")
        {
        bot.commands.get('prefix').execute(bot,message,Discord,config,guildId,prefix)
        console.log(cmd)
        }
    }

})

bot.login("ODU5NzczOTkzOTYyNDM4NjY2.YNxk7Q.tKT_9o14y9EhsffTVHEQLgRSc4s")