module.exports = {
    name: 'kick',
    description: 'This command is to kick someone out',
    execute(client, message, cmd, args, Discord){
        const member = message.mentions.users.first();
        if(member){
            if(message.member.roles.cache.some(role => role.name === 'ultimate power')){
                const victim = message.guild.members.cache.get(member.id);
                victim.kick();
                message.channel.send('User has been kicked.');
    
            } else {
                message.channel.send('You dont have power to execute this command.');
            }
        }
        else {
            message.channel.send('@user you want to kick out from the server.');
        }
    }
}