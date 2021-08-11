module.exports =
{
    name : 'jhand',
    description : 'this will dm the mentioned user infinite messages',
    async execute(bot,message,Discord)
    {
        mentiondm = message.mentions.members.first()
        if (!mentiondm)message.channel.send("Bolega kisko")
        else 
        {
            setInterval(function b(){mentiondm.send(hell)},2000);
        }
    }
}