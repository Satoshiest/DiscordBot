module.exports = {
    name: 'help',
    description: 'Embeds',
    execute(client, message, cmd, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('NISS Plugin Commands')
        .addFields(
            {name: '-greet', value: 'Displays a welcome greeting'}, 
            {name: '-getroles', value : 'Adds roles to the user'},
            {name: '-kick @user', value: 'Kick someone out if you have permission to do so.'},
            {name: '-clear [num]', value: 'Clear chat history up to 100 messages. \n Ex) -clear 10'},
            {name: '-urbandict [word]', value : 'Displays the definition of the word from urban dictionary. \n Ex) -urbandict dircord'},
            {name: '-image [keywords]', value : 'Displays the searched image. \n Ex) -image cat'},
            {name: '-translate [language] [phrase]', value : 'Translate a word or phrase into given language. \n Ex) -translate french hello.'},
            {name: '-definition [word]', value : 'Displays definition. \n Ex) -definition hello'},
            {name: '-play [url] OR -play [keywords]', value: 'Adds the song to the queue. \n Ex) -play O Canada'},
            {name: '-pause', value : 'Pause the current song'},
            {name: '-resume', value : 'Resume the current song'},
            {name: '-skip', value : 'Skips to the next song in the queue'},
            {name: '-leave', value : 'Music bot leaves the voice channel'},
        );
        message.channel.send(newEmbed)
    }
}