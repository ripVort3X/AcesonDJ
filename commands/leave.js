const {
  AudioPlayerStatus,
  createAudioPlayer,
  createAudioResource,
  joinVoiceChannel,
} = require('@discordjs/voice');

module.exports = {
  name: 'leave',
  description: 'stop the bot and leave the channel',
  async execute(client, message, args, Discord){

    const connection = joinVoiceChannel({
      channelId: message.member.voice.channel.id,
      guildId: message.guildId,
      adapterCreator: message.guild.voiceAdapterCreator
    });

    if (!connection) return message.channel.send("You need to be in a voice channel to stop the music!");
    await connection.disconnect();
    await message.channel.send('Leaving channel :wave:')

  }
}