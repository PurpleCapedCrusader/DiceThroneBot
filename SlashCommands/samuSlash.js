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
            value: JSON.stringify({'cardId': 'samu_budo', 'embedType': 1234, 'arrayNumber': 214})
          },
          {
            name: "BUSHIDO",
            value: JSON.stringify({'cardId': 'samu_bushido', 'embedType': 12, 'arrayNumber': 215})
          },
          {
            name: "DON'T BACK DOWN!",
            value: JSON.stringify({'cardId': 'samu30', 'embedType': 2, 'arrayNumber': 216})
          },
          {
            name: "EMPOWER",
            value: JSON.stringify({'cardId': 'samu_empower', 'embedType': 12345, 'arrayNumber': 217})
          },
          {
            name: "FOLLOW THROUGH!",
            value: JSON.stringify({'cardId': 'samu32', 'embedType': 12, 'arrayNumber': 218})
          },
          {
            name: "GISHI!",
            value: JSON.stringify({'cardId': 'samu31', 'embedType': 12, 'arrayNumber': 219})
          },
          {
            name: "HAGA",
            value: JSON.stringify({'cardId': 'samu_haga', 'embedType': 12345, 'arrayNumber': 220})
          },
          {
            name: "HAGAKURE",
            value: JSON.stringify({'cardId': 'samu_hagakure', 'embedType': 12345, 'arrayNumber': 221})
          },
          {
            name: "HONORABLE!",
            value: JSON.stringify({'cardId': 'samu28', 'embedType': 2, 'arrayNumber': 222})
          },
          {
            name: "KATANA SLICE",
            value: JSON.stringify({'cardId': 'samu_katana_slice', 'embedType': 1346, 'arrayNumber': 223})
          },
          {
            name: "KENSEI!",
            value: JSON.stringify({'cardId': 'samu33', 'embedType': 2, 'arrayNumber': 224})
          },
          {
            name: "MASAMUNE",
            value: JSON.stringify({'cardId': 'samu_masamune', 'embedType': 12345, 'arrayNumber': 225})
          },
          {
            name: "SHAME ON YOU!",
            value: JSON.stringify({'cardId': 'samu29', 'embedType': 2, 'arrayNumber': 226})
          },
          {
            name: "SHOGUN!",
            value: JSON.stringify({'cardId': 'samu_ult', 'embedType': 12, 'arrayNumber': 227})
          },
          {
            name: "SOLEMN",
            value: JSON.stringify({'cardId': 'samu_solemn', 'embedType': 12345, 'arrayNumber': 228})
          },
          {
            name: "SOLEMNITY",
            value: JSON.stringify({'cardId': 'samu_solemnity', 'embedType': 12345, 'arrayNumber': 229})
          },
          {
            name: "STAND TALL",
            value: JSON.stringify({'cardId': 'samu_stand_tall', 'embedType': 1234, 'arrayNumber': 230})
          },
          {
            name: "WAKIZASHI",
            value: JSON.stringify({'cardId': 'samu_wakizashi', 'embedType': 12346, 'arrayNumber': 231})
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