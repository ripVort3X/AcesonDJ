const { DiscordAPIError } = require("discord.js");

module.exports = {
  name: 'help',
  description: "Get all commands help!",
  execute(client, message, args, Discord){

    const exampleEmbed = {
      color: 0x00FFFF,
      title: 'Help Commands',
      author: {
        name: 'AcesonDJ Help',
      },
      description: 'All the commands of our bot!',
      fields: [
        {
          name: 'Prefix',
          value: 'Prefix is **+**',
        },
        {
          name: '+help',
          value: 'Use this command to get this all commands name and info!',
        },
        {
          name: '+test',
          value: 'Use this command to check our bot is online or not!',
        },
        {
          name: '+clear',
          value: 'Use this command to clear messages. Ex:- **+clear (amount of messages)**',
        },
        {
          name: '+play',
          value: 'Use this command to play music from YouTube! Ex:- **+play (youtube video link)**',
        },
        {
          name: '+leave',
          value: 'Use this command to stop bot from playing music and leave voice channel!',
        },
        {
          name: '+invite',
          value: 'Use this command to get invite of AcesonDJ bot!',
          inline: false,
        },
      ],
      footer: {
        text: 'Thanks for reading!',
      },
    };

    message.channel.send({ embeds: [exampleEmbed] });
  }
}
