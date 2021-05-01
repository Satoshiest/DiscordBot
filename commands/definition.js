module.exports = {
    name: 'definition',
    description: 'Returns the definition of word from wikipedia.',
    async execute(client, message, cmd, args, Discord){
        const word = args.join(' ');
        result = fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`)
        .then(result => result.text())
        .then(data => console.log(data))
        .catch(error => console.error(error));
        message.channel.send(result.definition);
    }
}