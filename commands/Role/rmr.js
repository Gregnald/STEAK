module.exports =
{
    name : 'rmr',
    description : 'This will remove roles',
    execute(bot,message,Discord)
    {
        let jword = ""
        for(i=1; i<(words.length-1) ; ++i)
        {
            jword = jword+" ";
            jword = jword+words[i];
        }
        jword = jword.trim();
        console.log(jword)

        const { guild } = message
        role = guild.roles.cache.find((role) => {return role.name === (`${jword}`)})
        let mention = message.mentions.members.first()
        if(!role)
        {
            message.channel.send('Role not found!!!')
        }
        else if(!mention)
        {
            message.channel.send('Atleast mention someone!!')
        }
        else
        {
            message.channel.send(`Removing Role....`)
            role = message.guild.roles.cache.find(role => role.name === `${jword}`)
            mention.roles.remove(role)
            message.channel.send(`${role} was removed from ${mention}`)
        }
        
    }
}