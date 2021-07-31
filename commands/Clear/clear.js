module.exports =
{
    name : 'clear',
    description : 'This will delete n no. of recent messages',
    async execute(bot,message,Discord)
    {
        const  { guild } = message
        channel = guild.channels.cache.find(channel => channel.name === 'clear-log')
        if(!channel)guild.channels.create('clear-log', { reason: 'Zrurat thi' })
        sentc = message.channel.name
        cm = message.author.id
        num = words[1]
        num++;
        if(!num) return message.reply(`Please Enter Ammount!!`)
        if(isNaN(num)) return message.reply(`Please Enter a Real Number!!`)
        if(num<1) return message.reply(`Atleast Delete 1 Message!!`)
        await message.channel.messages.fetch({limit : num}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
        channel = guild.channels.cache.find(channel => channel.name === 'clear-log')
        channel.send(`\`Deleted last ${num-1} messages\` of ${sentc}\nCommand sent by <@${cm}>`);
    }
}