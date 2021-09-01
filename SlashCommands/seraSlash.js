const { Client, CommandInteraction } = require('discord.js');
const embedCreate = require("../events/embedCreate.js");


module.exports = {
    name: 'seraph_cards',
    description: 'Seraph cards',
    options: [{
        name: 'select_card',
        type: 'STRING',
        description: 'choose a card',
        required: true,
        choices: [
          {
            name: "ANGELIC COMBAT!",
            value: JSON.stringify({'cardId': 'sera31', 'embedType': 12, 'arrayNumber': 232})
          },
          {
            name: "ANGELIC MANTLE",
            value: JSON.stringify({'cardId': 'sera_angelic_mantle', 'embedType': 12346, 'arrayNumber': 233})
          },
          {
            name: "ARCHANGEL'S WILL",
            value: JSON.stringify({'cardId': 'sera_archangels_will', 'embedType': 12345, 'arrayNumber': 234})
          },
          {
            name: "CHERUBIM",
            value: JSON.stringify({'cardId': 'sera_cherubim', 'embedType': 13567, 'arrayNumber': 235})
          },
          {
            name: "DIVINE INTERVENTION!",
            value: JSON.stringify({'cardId': 'sera30', 'embedType': 2, 'arrayNumber': 236})
          },
          {
            name: "DIVINE VISAGE",
            value: JSON.stringify({'cardId': 'sera_divine_visage', 'embedType': 12345, 'arrayNumber': 237})
          },
          {
            name: "GLORIOUS",
            value: JSON.stringify({'cardId': 'sera_glorious', 'embedType': 12345, 'arrayNumber': 238})
          },
          {
            name: "HEAVEN'S BLESSING",
            value: JSON.stringify({'cardId': 'sera_heavens_blessing', 'embedType': 12345, 'arrayNumber': 239})
          },
          {
            name: "HIGHEST POWER",
            value: JSON.stringify({'cardId': 'sera_highest_power', 'embedType': 12345, 'arrayNumber': 240})
          },
          {
            name: "HOLIER THAN THOU!",
            value: JSON.stringify({'cardId': 'sera33', 'embedType': 2, 'arrayNumber': 241})
          },
          {
            name: "HOLY BLADE",
            value: JSON.stringify({'cardId': 'sera_holy_blade', 'embedType': 13567, 'arrayNumber': 242})
          },
          {
            name: "HOLY COMMAND",
            value: JSON.stringify({'cardId': 'sera_command', 'embedType': 12345, 'arrayNumber': 243})
          },
          {
            name: "HOLY SMITE",
            value: JSON.stringify({'cardId': 'sera_holy_smite', 'embedType': 12345, 'arrayNumber': 244})
          },
          {
            name: "PURIFY",
            value: JSON.stringify({'cardId': 'sera_purify', 'embedType': 1234, 'arrayNumber': 245})
          },
          {
            name: "SMOTE!",
            value: JSON.stringify({'cardId': 'sera32', 'embedType': 12, 'arrayNumber': 246})
          },
          {
            name: "SPLIT THE HEAVENS!",
            value: JSON.stringify({'cardId': 'sera_ult', 'embedType': 12, 'arrayNumber': 247})
          },
          {
            name: "TAKE FLIGHT",
            value: JSON.stringify({'cardId': 'sera_take_flight', 'embedType': 12345, 'arrayNumber': 248})
          },
          {
            name: "TO THE SKIES!",
            value: JSON.stringify({'cardId': 'sera29', 'embedType': 2, 'arrayNumber': 249})
          },
          {
            name: "TRIUMPHANT",
            value: JSON.stringify({'cardId': 'sera_triumphant', 'embedType': 1234, 'arrayNumber': 250})
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