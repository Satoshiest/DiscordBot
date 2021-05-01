module.exports = {
    name: 'help',
    description: 'Embeds',
    execute(client, message, cmd, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Botoshiest Plugin Commands')
        .addFields(
            {name: 'Greet', value: '-greet'}, 
            {name: 'Kick someone out', value: '-kick @user'},
            {name: 'Clear chat history up to 100 messages', value: '-clear num between 1-100. Ex) -clear 10'},
            {name: 'Play Music', value: '-play url OR -play keywords.'}
        );
        message.channel.send(newEmbed)
    }
}