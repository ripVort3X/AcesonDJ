module.exports = {
    name: 'clear',
    description: "Clear Messages",
    async execute(client, message, args, Discord){       
        if(!args[0]) return message.reply("Please enter the amount of messages you want to clear!");
        if(isNaN(args[0])) return message.reply("Please enter a real number!");

        if(args[0] > 100) return message.reply("You can not delete more than 100 messages!");
        if(args[0] < 1) return message.reply("You must delete 1 message!");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        })
    }
}

