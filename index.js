let Discord = require('discord.js')
let bot = new Discord.Client();
const fs = require('fs');
let setup = require('./New Guild Setup')
bot.commands = new Discord.Collection();

let rawdata = fs.readFileSync('database.json');
let config = JSON.parse(rawdata);

const filesrc = require('./filesrc');
const console = require('console');
filesrc.execute(bot)

bot.on('ready',async () => {
	console.log(`Logged in as ${bot.user.tag}!`);
 });

 bot.on("guildCreate", (guild) => {
    // This event triggers when the bot joins a guild.    
    console.log(`Joined new guild: ${guild.name}`);
});

    bot.on('message', (message) =>
{
    let guildId = message.guild.id
    if(!config["guildIds"].includes(guildId))
    {
        setup.execute(fs,bot,Discord,config,guildId)
    }
    let ind = config["guildIds"].indexOf(guildId)
    prefix = config["prefix"][ind]

    if(message.content.startsWith("set pref"))
    {
        bot.commands.get('prefix').execute(bot,message,Discord,config,guildId,fs)
        console.log("prefix change")
    }
    if(message.content.startsWith("pref"))
    {
        message.channel.send("Your prefix is : "+prefix)
    }
    
    else if(message.content.startsWith(prefix) || message.content.startsWith("#"))
    {
        if(message.author.bot)return;
        words = message.content.split(' ')
        cmd = words[0].slice(prefix.length)
        
        //for everyone
        if(cmd === "help")
        {
        bot.commands.get('Help').execute(bot,message,Discord)
        console.log(cmd)
        return;
        }

        //Admin Specific
        if(message.member.hasPermission('ADMINISTRATOR') || (message.author.id)=="854774556984082491")
        {
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
            bot.commands.get('clear').execute(bot,message,Discord,config)
            console.log(cmd)
            }

            if(cmd === "clog")
            {
                bot.commands.get('clog').execute(bot,message,Discord,config,guildId,fs)
                console.log(cmd)
            }
        }
        else message.channel.send("You don't have admin rights!!")
    }   
})

bot.login("ODU5NzczOTkzOTYyNDM4NjY2.YNxk7Q.VDHIfRJE0gRCBd3MJqUPx3HAA18")
