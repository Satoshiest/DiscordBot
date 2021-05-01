module.exports = {
    name: 'clear',
    description: 'Clear certain amount of chat logs',
    async execute(cclient, message, cmd, args, Discord) {
        if(!args[0]) return message.reply('You need to enter a number after -clear');
        if(isNaN(args[0])) return message.reply('Please enter an integer.');
        if(args[0] > 100) return message.reply('You cannot delete more than 100 messages.');
        if(args[0] < 1) return message.reply('You need to delete at least one message.');

        if(message.member.roles.cache.some(role => role.name === 'power')){
            await message.channel.messages.fetch({limit: args[0]}).then(messages => {
                message.channel.bulkDelete(messages);
            });    
        }
        else {
            message.channel.send('You dont have power to execute this command.');
        }
    }
}