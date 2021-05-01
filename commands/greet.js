module.exports = {
    name: 'greet',
    description: 'This is greeting command',
    execute(client, message, cmd, args, Discord){
        message.channel.send('Hello!!')
    }
}