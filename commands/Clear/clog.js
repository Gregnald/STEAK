module.exports =
{
    name : 'clog',
    description : 'This will change log of clear message setting',
    async execute(bot,message,Discord,config,guildId,fs)
    {
        let jword = ""
        for(i=1; i<words.length ; ++i)
        {
            jword = jword+" ";
            jword = jword+words[i];
        }
        jword = jword.trim();
        console.log(jword)

        if(jword=="e"||jword=="d"||jword=="disable"||jword=="enable")
        {
            let ind = config["guildIds"].indexOf(guildId)
            config["clog"][ind] = jword
            if(jword=="d"||jword=="disable")message.channel.send("No new log will be created on deleting messages!!")
            else if(jword=="e"||jword=="enable")message.channel.send("Now onwards new logs will be created on deleting messages!!")
            let data = JSON.stringify(config);
            fs.writeFileSync('database.json', data);
        }
        else message.channel.send("Enter d to disable or e to enable!!")
    }
}
