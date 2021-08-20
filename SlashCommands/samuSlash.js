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
            value: JSON.stringify({'card': 'samu_budo', 'embed_type': 12, 'array_number': 215})
          },
          {
            name: "BUSHIDO",
            value: JSON.stringify({'card': 'samu_bushido', 'embed_type': 1, 'array_number': 216})
          },
          {
            name: "DON'T BACK DOWN!",
            value: JSON.stringify({'card': 'samu30', 'embed_type': 1, 'array_number': 217})
          },
          {
            name: "EMPOWER",
            value: JSON.stringify({'card': 'samu_empower', 'embed_type': 23, 'array_number': 218})
          },
          {
            name: "FOLLOW THROUGH!",
            value: JSON.stringify({'card': 'samu32', 'embed_type': 1, 'array_number': 219})
          },
          {
            name: "GISHI!",
            value: JSON.stringify({'card': 'samu31', 'embed_type': 1, 'array_number': 220})
          },
          {
            name: "HAGA",
            value: JSON.stringify({'card': 'samu_haga', 'embed_type': 23, 'array_number': 221})
          },
          {
            name: "HAGAKURE",
            value: JSON.stringify({'card': 'samu_hagakure', 'embed_type': 123, 'array_number': 222})
          },
          {
            name: "HONORABLE!",
            value: JSON.stringify({'card': 'samu28', 'embed_type': 1, 'array_number': 223})
          },
          {
            name: "KATANA SLICE",
            value: JSON.stringify({'card': 'samu_katana_slice', 'embed_type': 123, 'array_number': 224})
          },
          {
            name: "KENSEI!",
            value: JSON.stringify({'card': 'samu33', 'embed_type': 1, 'array_number': 225})
          },
          {
            name: "MASAMUNE",
            value: JSON.stringify({'card': 'samu_masamune', 'embed_type': 123, 'array_number': 226})
          },
          {
            name: "SHAME ON YOU!",
            value: JSON.stringify({'card': 'samu29', 'embed_type': 1, 'array_number': 227})
          },
          {
            name: "SHOGUN!",
            value: JSON.stringify({'card': 'samu_ult', 'embed_type': 1, 'array_number': 228})
          },
          {
            name: "SOLEMN",
            value: JSON.stringify({'card': 'samu_solemn', 'embed_type': 23, 'array_number': 229})
          },
          {
            name: "SOLEMNITY",
            value: JSON.stringify({'card': 'samu_solemnity', 'embed_type': 123, 'array_number': 230})
          },
          {
            name: "STAND TALL",
            value: JSON.stringify({'card': 'samu_stand_tall', 'embed_type': 12, 'array_number': 231})
          },
          {
            name: "WAKIZASHI",
            value: JSON.stringify({'card': 'samu_wakizashi', 'embed_type': 124, 'array_number': 232})
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