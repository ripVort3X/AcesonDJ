module.exports = {
    name: 'test',
    description: "This command is to test bot!",
    execute(client, message, args, Discord){
        message.channel.send('Im working fine. Use +help to see all commands!');
    }
}
