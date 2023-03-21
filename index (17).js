const { Client, Partials, Collection } = require('discord.js');

const client = new Client({
  intents: 32767,
  partials: [Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember, Partials.Reaction]
});

const fs = require('fs');
const config = require('./config.js');
require('dotenv').config()

client.aliases = new Collection()
client.slashCommands = new Collection()
client.token = config.bot.token
client.botid = config.bot.botid
module.exports = client;

fs.readdirSync('./List.gg/handlers').forEach((handler) => {
  require(`./List.gg/handlers/${handler}`)(client)
});
           
client.login(client.token)