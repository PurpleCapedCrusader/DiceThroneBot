const { Message, Client } = require("discord.js");

module.exports = {
    name: "tokens",
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        // console.log("commands/ping.js -----------------------------------------------")
        message.channel.send(`<a:poison_token:877706741947723807>  <a:evasive_token:877653552355479572> `);
    },
};