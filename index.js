let Discord = require('discord.js')
let bot = new Discord.Client();
const fs = require('fs')

bot.commands = new Discord.Collection();
const commandfiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandfiles)
{
    const command = require(`./commands/${file}`)
    bot.commands.set(command.name , command) 
}
bot.on('ready', () => {
	console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', (message) =>{
    if(message.content.startsWith("#"))
    {
        if(message.author.bot)return;
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(`You Don't Have Admin Permissions...!!`)
        words = message.content.split(' ')
        cmd = words[0].slice(1)

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
        if(cmd === "clear")
        {
        bot.commands.get('clear').execute(bot,message,Discord)
        console.log(cmd)
        }
    }

})

bot.login("ODU5NzczOTkzOTYyNDM4NjY2.YNxk7Q.tKT_9o14y9EhsffTVHEQLgRSc4s")