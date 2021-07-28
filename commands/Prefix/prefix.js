
module.exports =
{
    name : 'prifix',
    description : 'This will change',
    execute(bot,message,Discord,config,guildId,prefix)
    {
        if(message.content.startsWith("reset"))
        prefix = '#'
        else
        {
            prefix = words[(words.length-1)]
        }
        let ind = config["guildIds"].indexOf(guildId)
        config["prefix"][ind] = prefix
        message.channel.send("New Prefix : "+prefix)
    }
}