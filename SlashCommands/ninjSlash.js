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
            value: JSON.stringify({'cardId': 'ninj_ult', 'embedType': 12, 'arrayNumber': 159})
          },
          {
            name: "DEATH BLOSSOM",
            value: JSON.stringify({'cardId': 'ninj_death_blossom', 'embedType': 1234, 'arrayNumber': 160})
          },
          {
            name: "DOJO!",
            value: JSON.stringify({'cardId': 'ninj33', 'embedType': 2, 'arrayNumber': 161})
          },
          {
            name: "ESCAPE!",
            value: JSON.stringify({'cardId': 'ninj32', 'embedType': 2, 'arrayNumber': 162})
          },
          {
            name: "FAN OF KNIVES!",
            value: JSON.stringify({'cardId': 'ninj29', 'embedType': 2, 'arrayNumber': 163})
          },
          {
            name: "JUGULATE",
            value: JSON.stringify({'cardId': 'ninj_jugulate', 'embedType': 12345, 'arrayNumber': 164})
          },
          {
            name: "KUJI-KIRI",
            value: JSON.stringify({'cardId': 'ninj_kuji_kiri', 'embedType': 12345, 'arrayNumber': 165})
          },
          {
            name: "MISDIRECT",
            value: JSON.stringify({'cardId': 'ninj_misdirect', 'embedType': 12345, 'arrayNumber': 166})
          },
          {
            name: "POISON BLADE",
            value: JSON.stringify({'cardId': 'ninj_poison_blade', 'embedType': 1234, 'arrayNumber': 167})
          },
          {
            name: "POISON DART!",
            value: JSON.stringify({'cardId': 'ninj27', 'embedType': 2, 'arrayNumber': 168})
          },
          {
            name: "SHADE SHIFT",
            value: JSON.stringify({'cardId': 'ninj_shade_shift', 'embedType': 1234, 'arrayNumber': 169})
          },
          {
            name: "SHADEWALK",
            value: JSON.stringify({'cardId': 'ninj_shadewalk', 'embedType': 12345, 'arrayNumber': 170})
          },
          {
            name: "SHADOW FANG",
            value: JSON.stringify({'cardId': 'ninj_shadow_fang', 'embedType': 12345, 'arrayNumber': 171})
          },
          {
            name: "SLASH",
            value: JSON.stringify({'cardId': 'ninj_slash', 'embedType': 134, 'arrayNumber': 172})
          },
          {
            name: "SMOKE OFFERING!",
            value: JSON.stringify({'cardId': 'ninj30', 'embedType': 2, 'arrayNumber': 173})
          },
          {
            name: "SMOKE SCREEN",
            value: JSON.stringify({'cardId': 'ninj_smoke_screen', 'embedType': 12345, 'arrayNumber': 174})
          },
          {
            name: "THROWING STARS!",
            value: JSON.stringify({'cardId': 'ninj28', 'embedType': 12, 'arrayNumber': 175})
          },
          {
            name: "TIP OF THE BLADE",
            value: JSON.stringify({'cardId': 'ninj_tip_of_the_blade', 'embedType': 12345, 'arrayNumber': 176})
          },
          {
            name: "TRAIN!",
            value: JSON.stringify({'cardId': 'ninj31', 'embedType': 2, 'arrayNumber': 177})
          },
          {
            name: "WALK THE LINE",
            value: JSON.stringify({'cardId': 'ninj_walk_the_line', 'embedType': 12345, 'arrayNumber': 178})
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