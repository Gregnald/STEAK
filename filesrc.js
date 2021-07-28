module.exports =
{
    name : 'filesrc',
    description : 'This will search files',
    execute(bot)
    {
        const fs = require('fs');
        const commandFolders = fs.readdirSync('./commands');
        for (const folder of commandFolders) {
            const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
            for (const file of commandFiles) {
                const command = require(`./commands/${folder}/${file}`);
                bot.commands.set(command.name, command);
            }
        }
    }
}