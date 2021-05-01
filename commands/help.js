module.exports = {
    name: 'help',
    description: 'Embeds',
    execute(client, message, cmd, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Botoshiest Plugin Commands')
        .addFields(
            {name: '-greet', value: 'Great'}, 
            {name: '-kick @user', value: 'Kick someone out'},
            {name: '-clear num between 1-100. Ex) -clear 10', value: 'Clear chat history up to 100 messages'},
            {name: '-play url OR -play keywords', value: 'Play Music'}
        );
        message.channel.send(newEmbed)
    }
}
