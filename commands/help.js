module.exports = {
    name: 'help',
    description: 'Embeds',
    execute(client, message, cmd, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Botoshiest Plugin Commands')
        .addFields(
            {name: '-greet', value: 'Great'}, 
            {name: '-kick @user', value: 'Kick someone out if you have permission to do so.'},
            {name: '-clear num between 1-100. Ex) -clear 10', value: 'Clear chat history up to 100 messages'},
            {name: '-play url OR -play keywords', value: 'Play Music'},
            {name: '-definition', value : 'Displays the definition of the word'},
            {name: '-getroles', value : 'Adds roles to the user'},
            {name: '-image', value : 'Displays the searched image'},
            {name: '-leave', value : 'Leaves the voice channel'}

        );
        message.channel.send(newEmbed)
    }
}
