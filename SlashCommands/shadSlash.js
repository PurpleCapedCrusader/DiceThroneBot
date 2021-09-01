const { Client, CommandInteraction } = require('discord.js');
const embedCreate = require("../events/embedCreate.js");


module.exports = {
    name: 'shadow_thief_cards',
    description: 'Shadow Thief cards',
    options: [{
        name: 'select_card',
        type: 'STRING',
        description: 'choose a card',
        required: true,
        choices: [
          {
            name: "CARD TRICK!",
            value: JSON.stringify({'cardId': 'shad32', 'embedType': 2, 'arrayNumber': 251})
          },
          {
            name: "CARDUCOPIA",
            value: JSON.stringify({'cardId': 'shad_carducopia', 'embedType': 1234, 'arrayNumber': 252})
          },
          {
            name: "COUNTER STRIKE",
            value: JSON.stringify({'cardId': 'shad_counter_strike', 'embedType': 1234, 'arrayNumber': 253})
          },
          {
            name: "DAGGER STRIKE",
            value: JSON.stringify({'cardId': 'shad_dagger_strike', 'embedType': 1234, 'arrayNumber': 254})
          },
          {
            name: "ENTER THE SHADOWS!",
            value: JSON.stringify({'cardId': 'shad31', 'embedType': 2, 'arrayNumber': 255})
          },
          {
            name: "INSIDIOUS STRIKE",
            value: JSON.stringify({'cardId': 'shad_insidious_strike', 'embedType': 12345, 'arrayNumber': 256})
          },
          {
            name: "PICKPOCKET",
            value: JSON.stringify({'cardId': 'shad_pickpocket', 'embedType': 1234, 'arrayNumber': 257})
          },
          {
            name: "POISON WOUND!",
            value: JSON.stringify({'cardId': 'shad28', 'embedType': 2, 'arrayNumber': 258})
          },
          {
            name: "SHADOW COIN!",
            value: JSON.stringify({'cardId': 'shad30', 'embedType': 2, 'arrayNumber': 259})
          },
          {
            name: "SHADOW DANCE",
            value: JSON.stringify({'cardId': 'shad_shadow_dance', 'embedType': 1234, 'arrayNumber': 260})
          },
          {
            name: "SHADOW DEFENSE",
            value: JSON.stringify({'cardId': 'shad_shadow_defense', 'embedType': 1234, 'arrayNumber': 261})
          },
          {
            name: "SHADOW MELD!",
            value: JSON.stringify({'cardId': 'shad33', 'embedType': 2, 'arrayNumber': 262})
          },
          {
            name: "SHADOW SHANK!",
            value: JSON.stringify({'cardId': 'shad_ult', 'embedType': 12, 'arrayNumber': 263})
          },
          {
            name: "SHADOW STRIKE",
            value: JSON.stringify({'cardId': 'shad_shadow_strike', 'embedType': 12345, 'arrayNumber': 264})
          },
          {
            name: "SHANK ATTACK",
            value: JSON.stringify({'cardId': 'shad_shank_attack', 'embedType': 12345, 'arrayNumber': 265})
          },
          {
            name: "SHIFTY STRIKE",
            value: JSON.stringify({'cardId': 'shad_shifty_strike', 'embedType': 12345, 'arrayNumber': 266})
          },
          {
            name: "SNEAKY!",
            value: JSON.stringify({'cardId': 'shad27', 'embedType': 2, 'arrayNumber': 267})
          },
          {
            name: "WILD SHADOW!",
            value: JSON.stringify({'cardId': 'shad29', 'embedType': 2, 'arrayNumber': 268})
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