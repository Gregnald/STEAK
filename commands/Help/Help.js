module.exports =
{
    name : 'Help',
    description : 'This will help for commands',
    async execute(bot,message,Discord)
    {
        p=prefix
        message.channel.send(`
\`\`\`My Commands :
        
 ${p}clear => clear n no of previous messages [creates a new channel to show logs]

 pref => To get to know ur prefix

 ${p}clog {e/d}[enable/disable] => gives log of deleted messages if enabled
 
 ${p}set pref {reset / ur custom prefix} => to set custom prefix for separate servers
 
 ${p}crole {role name} => creates a role with default permissions
 
 ${p}role {role name} @{person} => assigns a specific role to a specific person
 
 ${p}rmr {role name} @{person} => removes a specific role from a specific person
 
 ${p}rinfo {role name} => no use basically provide date of role created and it colour in base 10
 
 ${p}help => to repeat this bullshit..
        
Note : Commands are to be used in the way they are written\`\`\``)
    }
}