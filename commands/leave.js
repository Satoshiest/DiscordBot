module.exports = {
    name: 'leave',
    description: 'Stop playing music and leave the voice channel.',
    async execute(client, message, cmd, args, Discord) {
        const voice_channel = message.member.voice.channel;
 
        if(!voice_channel) return message.channel.send("You need to be in a voice channel to stop the music.");
        await voice_channel.leave();
    }
}