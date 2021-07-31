
module.exports =
{
    name : 'prefix',
    description : 'This will change',
    execute(bot,message,Discord,config,guildId,fs)
    {
        words = message.content.split(' ')
        if(message.content.endsWith("reset"))prefix = '#'
        else
        {
            prefix = words[(words.length-1)]
        }
        let ind = config["guildIds"].indexOf(guildId)
        console.log("ind = "+ind)
        config["prefix"][ind] = prefix
        message.channel.send("New Prefix : "+prefix)
        let data = JSON.stringify(config);
        fs.writeFileSync('database.json', data);
    }
}