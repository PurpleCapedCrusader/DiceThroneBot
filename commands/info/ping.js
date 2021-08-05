const { Message, Client } = require("discord.js");

module.exports = {
    name: "ping",
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        // console.log("commands/ping.js -----------------------------------------------")
        message.channel.send(`${client.ws.ping} ws ping`);
    },
};