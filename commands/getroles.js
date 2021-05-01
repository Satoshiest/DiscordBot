module.exports = {
    name: 'getroles',
    description: 'Add roles',
    async execute(client, message, cmd, args, Discord){
        const channel = `${message.channel.id}`;
        const CA = message.guild.roles.cache.find(role => role.name === "CA");
        const JP = message.guild.roles.cache.find(role => role.name === "JP");
        const CN = message.guild.roles.cache.find(role => role.name === "CN");
        const US = message.guild.roles.cache.find(role => role.name === "US");
        const KR = message.guild.roles.cache.find(role => role.name === "KR");

 
        const canda = '🇨🇦';
        const japan = '🇯🇵';
        const china = '🇨🇳';
        const america = '🇺🇸';
        const korea = '🇰🇷';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Get your roles here.')
            .setDescription('Choose whichever you like. \n\n'
                + `${canda} for Canadian\n`
                + `${america} for American\n`
                + `${japan} for Japanese\n`
                + `${china} for Chinese\n`
                + `${korea} for Korean\n`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(canda);
        messageEmbed.react(america);
        messageEmbed.react(japan);
        messageEmbed.react(china);
        messageEmbed.react(korea);

 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === canda) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(CA);
                }
                if (reaction.emoji.name === japan) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(JP);
                }
                if (reaction.emoji.name === china) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(CN);
                }
                if (reaction.emoji.name === america) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(US);
                }
                if (reaction.emoji.name === korea) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(KR);
                }
            } 
            else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === canda) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(CA);
                }
                if (reaction.emoji.name === japan) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(JP);
                }
                if (reaction.emoji.name === china) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(CN);
                }
                if (reaction.emoji.name === america) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(US);
                }
                if (reaction.emoji.name === korea) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(KR);
                }
            } 
            else {
                return;
            }
        });
    }
}   
