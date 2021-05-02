module.exports = {
    name: 'help',
    description: 'Embeds',
    execute(client, message, cmd, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Botoshiest Plugin Commands')
        .addFields(
            {name: '-greet', value: 'Displays a welcome greeting'}, 
            {name: '-getroles', value : 'Adds roles to the user'},
            {name: '-kick @user', value: 'Kick someone out if you have permission to do so.'},
            {name: '-clear num between 1-100. Ex) -clear 10', value: 'Clear chat history up to 100 messages'},
            {name: '-urbandict', value : 'Displays the definition of the word from urban dictionary.'},
            {name: '-image', value : 'Displays the searched image'},
            {name: '-translate', value : 'Translate a word or phrase into english'},
            {name: '-definition', value : 'Displays definition'},
            {name: '-play url OR -play keywords', value: 'Adds the song to the queue'},
            {name: '-skip', value : 'Skips to the next song in the queue'},
            {name: '-leave', value : 'Music bot leaves the voice channel'},
        );
        message.channel.send(newEmbed)
    }
}
