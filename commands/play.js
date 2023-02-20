const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
const {
  AudioPlayerStatus,
  createAudioPlayer,
  createAudioResource,
  joinVoiceChannel,
} = require('@discordjs/voice');


module.exports = {

  name: 'play',
  description: 'Play a music!',
  async execute(client, message, args, Discord){
    const voiceChannel = message.member.voice.channel;

    if (!voiceChannel) return message.channel.send('You need to be in a voice channel to use this command!');
    const permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has('CONNECT')) return message.channel.send('You dont have the correct permissins');
    if (!permissions.has('SPEAK')) return message.channel.send('You dont have the correct permissins');
    if (!args.length) return message.channel.send('You need to send the second option!');

    const validURL = (str) => {
      var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
      if (!regex.test(str)) {
        return false;
      } else {
        return true;
      }
    }

    if (validURL(args[0])) {

      const connection = joinVoiceChannel({
        channelId: message.member.voice.channel.id,
        guildId: message.guildId,
        adapterCreator: message.guild.voiceAdapterCreator
      });
      const stream = ytdl(args[0], { filter: 'audioonly' });
      const player = createAudioPlayer();
      const resource = createAudioResource(stream, { seek: 0, volume: 1 });

      player.play(resource);
      connection.subscribe(player);

      player.on('error', (error) => console.error(error));
      player.on(AudioPlayerStatus.Idle, () => {
        console.log(`song's finished`);
        connection.disconnect();
      });

      await message.reply(`:thumbsup: Now Playing ***Your Link!***`)

      return
    }

    const connection = joinVoiceChannel({
      channelId: message.member.voice.channel.id,
      guildId: message.guildId,
      adapterCreator: message.guild.voiceAdapterCreator
    });

    const videoFinder = async (query) => {
      const videoResult = await ytSearch(query);

      return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;

    };

    const video = await videoFinder(args.join(' '));

    if (video) {
       const stream = ytdl(args[0], { filter: 'audioonly' });
      const player = createAudioPlayer();
      const resource = createAudioResource(stream, { seek: 0, volume: 1 });

      player.play(resource);
      connection.subscribe(player);
      
      connection.play(stream, { seek: 0, volume: 1 })
        player.on(AudioPlayerStatus.Idle, () => {
        console.log(`song's finished`);
        connection.disconnect();
      });

      await message.reply(`:thumbsup: Now playing ***${video.title}***`);
    } else {
      message.channel.send('No video results found');
    }
  }
}


/* 

 const player = createAudioPlayer();
      const resource = createAudioResource(stream);

      await player.play(resource);
      connection.subscribe(player);

      player.on('error', (error) => console.error(error));
      player.on(AudioPlayerStatus.Idle, () => {
        console.log(`song's finished`);
        connection.disconnect();
      });

*/