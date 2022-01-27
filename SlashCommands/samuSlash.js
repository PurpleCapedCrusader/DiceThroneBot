const { Client, CommandInteraction } = require('discord.js');
const embedCreate = require("../events/embedCreate.js");


module.exports = {
    name: 'samurai_cards',
    description: 'Samurai cards',
    options: [{
        name: 'select_card',
        type: 'STRING',
        description: 'choose a card',
        required: true,
        choices: [
          {
            name: "BUDO",
            value: "budo"
          },
          {
            name: "BUSHIDO",
            value: "bushido"
          },
          {
            name: "DON'T BACK DOWN!",
            value: "dont_back_down"
          },
          {
            name: "EMPOWER",
            value: "empower"
          },
          {
            name: "FOLLOW THROUGH!",
            value: "follow_through"
          },
          {
            name: "GISHI!",
            value: "gishi"
          },
          {
            name: "HAGA",
            value: "haga"
          },
          {
            name: "HAGAKURE",
            value: "hagakure"
          },
          {
            name: "HONORABLE!",
            value: "honorable"
          },
          {
            name: "KATANA SLICE",
            value: "katana_slice"
          },
          {
            name: "KENSEI!",
            value: "kensei"
          },
          {
            name: "MASAMUNE",
            value: "masamune"
          },
          {
            name: "SHAME ON YOU!",
            value: "shame_on_you"
          },
          {
            name: "SHOGUN!",
            value: "shogun"
          },
          {
            name: "SOLEMN",
            value: "solemn"
          },
          {
            name: "SOLEMNITY",
            value: "solemnity"
          },
          {
            name: "STAND TALL",
            value: "stand_tall"
          },
          {
            name: "WAKIZASHI",
            value: "wakizashi"
          }
        ]
    }],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
      embedCreate.embedCreate(client, interaction, args);
    },
};