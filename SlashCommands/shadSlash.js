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
            value: JSON.stringify({'card': 'shad32', 'embed_type': 1, 'array_number': 252})
          },
          {
            name: "CARDUCOPIA",
            value: JSON.stringify({'card': 'shad_carducopia', 'embed_type': 12, 'array_number': 253})
          },
          {
            name: "COUNTER STRIKE",
            value: JSON.stringify({'card': 'shad_counter_strike', 'embed_type': 12, 'array_number': 254})
          },
          {
            name: "DAGGER STRIKE",
            value: JSON.stringify({'card': 'shad_dagger_strike', 'embed_type': 12, 'array_number': 255})
          },
          {
            name: "ENTER THE SHADOWS!",
            value: JSON.stringify({'card': 'shad31', 'embed_type': 1, 'array_number': 256})
          },
          {
            name: "INSIDIOUS STRIKE",
            value: JSON.stringify({'card': 'shad_insidious_strike', 'embed_type': 123, 'array_number': 257})
          },
          {
            name: "PICKPOCKET",
            value: JSON.stringify({'card': 'shad_pickpocket', 'embed_type': 12, 'array_number': 258})
          },
          {
            name: "POISON WOUND!",
            value: JSON.stringify({'card': 'shad28', 'embed_type': 1, 'array_number': 259})
          },
          {
            name: "SHADOW COIN!",
            value: JSON.stringify({'card': 'shad30', 'embed_type': 1, 'array_number': 260})
          },
          {
            name: "SHADOW DANCE",
            value: JSON.stringify({'card': 'shad_shadow_dance', 'embed_type': 12, 'array_number': 261})
          },
          {
            name: "SHADOW DEFENSE",
            value: JSON.stringify({'card': 'shad_shadow_defense', 'embed_type': 12, 'array_number': 262})
          },
          {
            name: "SHADOW MELD!",
            value: JSON.stringify({'card': 'shad33', 'embed_type': 1, 'array_number': 263})
          },
          {
            name: "SHADOW SHANK!",
            value: JSON.stringify({'card': 'shad_ult', 'embed_type': 1, 'array_number': 264})
          },
          {
            name: "SHADOW STRIKE",
            value: JSON.stringify({'card': 'shad_shadow_strike', 'embed_type': 23, 'array_number': 265})
          },
          {
            name: "SHANK ATTACK",
            value: JSON.stringify({'card': 'shad_shank_attack', 'embed_type': 23, 'array_number': 266})
          },
          {
            name: "SHIFTY STRIKE",
            value: JSON.stringify({'card': 'shad_shifty_strike', 'embed_type': 123, 'array_number': 267})
          },
          {
            name: "SNEAKY!",
            value: JSON.stringify({'card': 'shad27', 'embed_type': 1, 'array_number': 268})
          },
          {
            name: "WILD SHADOW!",
            value: JSON.stringify({'card': 'shad29', 'embed_type': 1, 'array_number': 269})
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