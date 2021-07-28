module.exports ={
    name : 'createroles',
    description : 'This will create roles',
    execute(bot,message,Discord)
    {
        let jword = ""
        for(i=1; i<words.length ; ++i)
        {
            jword = jword+" ";
            jword = jword+words[i];
        }
        jword = jword.trim();
        console.log(jword)
        const { guild } = message
        role = guild.roles.cache.find((role) => {return role.name === (`${jword}`)})
        if(!role)
        {
            message.guild.roles.create({
                data: 
                {  
                    name: jword,
                    color: 'RANDOM',
                },
                reason: 'Aise hi Sexy lag raha tha'
        })
        message.channel.send(`Role Created!!`)
        message.channel.send(`Now add role to members by typing \`#role {Role Name} {@memeber}\``)
        }
    }
}