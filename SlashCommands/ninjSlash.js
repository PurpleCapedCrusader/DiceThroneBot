const { Client, CommandInteraction } = require('discord.js');
const embedCreate = require("../events/embedCreate.js");


module.exports = {
    name: 'ninja_cards',
    description: 'Ninja cards',
    options: [{
        name: 'select_card',
        type: 'STRING',
        description: 'choose a card',
        required: true,
        choices: [
          {
            name: "ASSASSINATE!",
            value: JSON.stringify({'card': 'ninj_ult', 'embed_type': 1, 'array_number': 160})
          },
          {
            name: "DEATH BLOSSOM",
            value: JSON.stringify({'card': 'ninj_death_blossom', 'embed_type': 12, 'array_number': 161})
          },
          {
            name: "DOJO!",
            value: JSON.stringify({'card': 'ninj33', 'embed_type': 1, 'array_number': 162})
          },
          {
            name: "ESCAPE!",
            value: JSON.stringify({'card': 'ninj32', 'embed_type': 1, 'array_number': 163})
          },
          {
            name: "FAN OF KNIVES!",
            value: JSON.stringify({'card': 'ninj29', 'embed_type': 1, 'array_number': 164})
          },
          {
            name: "JUGULATE",
            value: JSON.stringify({'card': 'ninj_jugulate', 'embed_type': 23, 'array_number': 165})
          },
          {
            name: "KUJI-KIRI",
            value: JSON.stringify({'card': 'ninj_kuji_kiri', 'embed_type': 23, 'array_number': 166})
          },
          {
            name: "MISDIRECT",
            value: JSON.stringify({'card': 'ninj_misdirect', 'embed_type': 23, 'array_number': 167})
          },
          {
            name: "POISON BLADE",
            value: JSON.stringify({'card': 'ninj_poison_blade', 'embed_type': 12, 'array_number': 168})
          },
          {
            name: "POISON DART!",
            value: JSON.stringify({'card': 'ninj27', 'embed_type': 1, 'array_number': 169})
          },
          {
            name: "SHADE SHIFT",
            value: JSON.stringify({'card': 'ninj_shade_shift', 'embed_type': 12, 'array_number': 170})
          },
          {
            name: "SHADEWALK",
            value: JSON.stringify({'card': 'ninj_shadewalk', 'embed_type': 123, 'array_number': 171})
          },
          {
            name: "SHADOW FANG",
            value: JSON.stringify({'card': 'ninj_shadow_fang', 'embed_type': 123, 'array_number': 172})
          },
          {
            name: "SLASH",
            value: JSON.stringify({'card': 'ninj_slash', 'embed_type': 12, 'array_number': 173})
          },
          {
            name: "SMOKE OFFERING!",
            value: JSON.stringify({'card': 'ninj30', 'embed_type': 1, 'array_number': 174})
          },
          {
            name: "SMOKE SCREEN",
            value: JSON.stringify({'card': 'ninj_smoke_screen', 'embed_type': 123, 'array_number': 175})
          },
          {
            name: "THROWING STARS!",
            value: JSON.stringify({'card': 'ninj28', 'embed_type': 1, 'array_number': 176})
          },
          {
            name: "TIP OF THE BLADE",
            value: JSON.stringify({'card': 'ninj_tip_of_the_blade', 'embed_type': 23, 'array_number': 177})
          },
          {
            name: "TRAIN!",
            value: JSON.stringify({'card': 'ninj31', 'embed_type': 1, 'array_number': 178})
          },
          {
            name: "WALK THE LINE",
            value: JSON.stringify({'card': 'ninj_walk_the_line', 'embed_type': 123, 'array_number': 179})
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