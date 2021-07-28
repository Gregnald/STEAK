module.exports =
{
    name : 'rinfo',
    description : 'This will give role info',
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
        if(!role){message.channel.send('nahi hai \n Please enter a valid role!!')}
        else
        {

            message.channel.send(`${role} hai be`)
            message.channel.send("Its Color (in base 10) : "+role.color)
            message.channel.send("Created on "+role.createdAt)
        }
    }
}