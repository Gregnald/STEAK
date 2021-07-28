module.exports =
{
    name : 'New Guild Setup',
    description : 'New Guild Configurations',
    execute(fs,bot,Discord,config,guildId)
    {
        config["guildIds"].push(guildId)
        config["prefix"].push("#")
        let data = JSON.stringify(config);
        fs.writeFileSync('database.json', data);
        console.log("New guild Made Id : "+guildId)
    }
}