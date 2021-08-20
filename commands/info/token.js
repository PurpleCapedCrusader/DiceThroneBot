const { Message, Client } = require("discord.js");

module.exports = {
    name: "token",
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        // console.log("commands/ping.js -----------------------------------------------")
        console.log(message.guild.emojis.cache)
    },
};