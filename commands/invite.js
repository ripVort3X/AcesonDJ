module.exports = {
  name: 'invite',
  description: "Get invite of AcesonDJ",
  execute(client, message, args, Discord){
    message.channel.send('Here is the link to invite me! Link:- https://discord.com/api/oauth2/authorize?client_id=1052572350001975317&permissions=556532854609&scope=bot');
  }
}
