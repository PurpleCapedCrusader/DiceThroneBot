const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "ping",
    description: "returns websocket ping",

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        console.log("SlashCommand/ping.js -----------------------------------------------")
        interaction.followUp({ content: `${client.ws.ping}ms!` });
    },
};