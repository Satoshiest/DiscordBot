const urban = require('relevant-urban');

module.exports = {
    name: 'urbandict',
    description: 'Sends the definition of the given word.',
    async execute(client, message, cmd, args, Discord) {
        if (args.length > 0) {
            let result = await urban(args.join(' ')).catch( e => {
                return message.channel.send('Sorry the word was not found!!');
            });

            const embed = new Discord.MessageEmbed()
            .setColor('#FFFF00')
            .setTitle(result.word)
            .setURL(result.urbanURL)
            .setDescription(`Definition \n ${result.definition} \n \n Examples: \n ${result.example}`)
            message.channel.send(embed)
        }
        else {
          message.channel.send("Please specify the word you would like to define! :smile:");
        }
    }
}