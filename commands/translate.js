const translator = require('@iamtraction/google-translate');

module.exports = {
    name: 'translate',
    description: 'Translate the message sent by user.',
    async execute(client, message, cmd, args, Discord) {
        const language = args[0];
        const input = args.join(" ");
        const phrase = input.slice(input.indexOf(' '), input.length);
        if(!phrase) {
            message.channel.send('Enter words you want to translate!')
        }
        else{
            translator(phrase, { to: `${language}` })
            .then(res => {
                message.channel.send(phrase)
                message.channel.send(res.text)
            })
            .catch(err => {
                message.channel.send('Please specify a language. \nEx) -translate french hello. \n Or the selected language may not be supported.')
                console.error(err);
            });
        }
    }
}