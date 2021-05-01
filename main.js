require(`dotenv`).config();
const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const prefix = process.env.PREFIX

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(file => {
    require(`./handlers/${file}`)(client, Discord);
})

client.login(process.env.TOKEN)
