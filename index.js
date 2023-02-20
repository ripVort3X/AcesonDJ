const Discord = require("discord.js");
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_VOICE_STATES"],
});

 client.commands = new Discord.Collection();
 client.events = new Discord.Collection();

 ['command_handler', 'event_handler'].forEach(handler => {
  require(`./handlers/${handler}`)(client, Discord)
 })

client.login('MTA1MjU3MjM1MDAwMTk3NTMxNw.G7KFit.V8X0HiWXqjxLx3_7T-5bUH86kTJgQKNGTF5mcU')