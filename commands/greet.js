module.exports = {
    name: 'greet',
    description: 'This is greeting command',
    execute(client, message, cmd, args, Discord){
        message.channel.send(`Hello ${message.member.user}!! \nI am NISS bot. \nTo see the plugin commands: \n-help`)
    }
}