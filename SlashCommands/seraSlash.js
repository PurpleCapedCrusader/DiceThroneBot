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
            value: JSON.stringify({'card': 'sera31', 'embed_type': 1, 'array_number': 233})
          },
          {
            name: "ANGELIC MANTLE",
            value: JSON.stringify({'card': 'sera_angelic_mantle', 'embed_type': 124, 'array_number': 234})
          },
          {
            name: "ARCHANGEL'S WILL",
            value: JSON.stringify({'card': 'sera_archangels_will', 'embed_type': 123, 'array_number': 235})
          },
          {
            name: "CHERUBIM",
            value: JSON.stringify({'card': 'sera_cherubim', 'embed_type': 2345, 'array_number': 236})
          },
          {
            name: "DIVINE INTERVENTION!",
            value: JSON.stringify({'card': 'sera30', 'embed_type': 1, 'array_number': 237})
          },
          {
            name: "DIVINE VISAGE",
            value: JSON.stringify({'card': 'sera_divine_visage', 'embed_type': 23, 'array_number': 238})
          },
          {
            name: "GLORIOUS",
            value: JSON.stringify({'card': 'sera_glorious', 'embed_type': 123, 'array_number': 239})
          },
          {
            name: "HEAVEN'S BLESSING",
            value: JSON.stringify({'card': 'sera_heavens_blessing', 'embed_type': 23, 'array_number': 240})
          },
          {
            name: "HIGHEST POWER",
            value: JSON.stringify({'card': 'sera_highest_power', 'embed_type': 123, 'array_number': 241})
          },
          {
            name: "HOLIER THAN THOU!",
            value: JSON.stringify({'card': 'sera33', 'embed_type': 1, 'array_number': 242})
          },
          {
            name: "HOLY BLADE",
            value: JSON.stringify({'card': 'sera_holy_blade', 'embed_type': 12345, 'array_number': 243})
          },
          {
            name: "HOLY COMMAND",
            value: JSON.stringify({'card': 'sera_command', 'embed_type': 23, 'array_number': 244})
          },
          {
            name: "HOLY SMITE",
            value: JSON.stringify({'card': 'sera_holy_smite', 'embed_type': 123, 'array_number': 245})
          },
          {
            name: "PURIFY",
            value: JSON.stringify({'card': 'sera_purify', 'embed_type': 12, 'array_number': 246})
          },
          {
            name: "SMOTE!",
            value: JSON.stringify({'card': 'sera32', 'embed_type': 1, 'array_number': 247})
          },
          {
            name: "SPLIT THE HEAVENS!",
            value: JSON.stringify({'card': 'sera_ult', 'embed_type': 1, 'array_number': 248})
          },
          {
            name: "TAKE FLIGHT",
            value: JSON.stringify({'card': 'sera_take_flight', 'embed_type': 23, 'array_number': 249})
          },
          {
            name: "TO THE SKIES!",
            value: JSON.stringify({'card': 'sera29', 'embed_type': 1, 'array_number': 250})
          },
          {
            name: "TRIUMPHANT",
            value: JSON.stringify({'card': 'sera_triumphant', 'embed_type': 12, 'array_number': 251})
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