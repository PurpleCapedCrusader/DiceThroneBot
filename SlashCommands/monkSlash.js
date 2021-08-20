const { Client, CommandInteraction } = require('discord.js');
const embedCreate = require("../events/embedCreate.js");


module.exports = {
    name: 'monk_cards',
    description: 'Monk cards',
    options: [{
        name: 'select_card',
        type: 'STRING',
        description: 'choose a card',
        required: true,
        choices: [
          {
            name: "COMBO STRIKE",
            value: JSON.stringify({'card': 'monk_combo_strike', 'embed_type': 12, 'array_number': 125})
          },
          {
            name: "CONTEMPLATE!",
            value: JSON.stringify({'card': 'monk32', 'embed_type': 1, 'array_number': 126})
          },
          {
            name: "ENLIGHTENMENT!",
            value: JSON.stringify({'card': 'monk33', 'embed_type': 1, 'array_number': 127})
          },
          {
            name: "FIST OF HARMONY",
            value: JSON.stringify({'card': 'monk_fist_of_harmony', 'embed_type': 12, 'array_number': 128})
          },
          {
            name: "FIST OF TRANQUILITY",
            value: JSON.stringify({'card': 'monk_fist_of_tranquility', 'embed_type': 123, 'array_number': 129})
          },
          {
            name: "FIST STRIKE",
            value: JSON.stringify({'card': 'monk_fist_strike', 'embed_type': 124, 'array_number': 130})
          },
          {
            name: "LOTUS STRIKE",
            value: JSON.stringify({'card': 'monk_lotus_strike', 'embed_type': 123, 'array_number': 131})
          },
          {
            name: "MEDITATE",
            value: JSON.stringify({'card': 'monk_meditate', 'embed_type': 123, 'array_number': 132})
          },
          {
            name: "MYSTIC MANTRA!",
            value: JSON.stringify({'card': 'monk30', 'embed_type': 1, 'array_number': 133})
          },
          {
            name: "PALM STRIKE!",
            value: JSON.stringify({'card': 'monk29', 'embed_type': 1, 'array_number': 134})
          },
          {
            name: "RUMINATE!",
            value: JSON.stringify({'card': 'monk31', 'embed_type': 1, 'array_number': 135})
          },
          {
            name: "SERENITY",
            value: JSON.stringify({'card': 'monk_serenity', 'embed_type': 124, 'array_number': 136})
          },
          {
            name: "TEMPEST RUSH",
            value: JSON.stringify({'card': 'monk_tempest_rush', 'embed_type': 12, 'array_number': 137})
          },
          {
            name: "TRANSCENDENCE!",
            value: JSON.stringify({'card': 'monk_ult', 'embed_type': 1, 'array_number': 138})
          },
          {
            name: "WAY OF THE LOTUS",
            value: JSON.stringify({'card': 'monk_way_of_the_lotus', 'embed_type': 23, 'array_number': 139})
          },
          {
            name: "WAY OF THE MONK",
            value: JSON.stringify({'card': 'monk_way_of_the_monk', 'embed_type': 23, 'array_number': 140})
          },
          {
            name: "ZEN STRIKE",
            value: JSON.stringify({'card': 'monk_zen_strike', 'embed_type': 23, 'array_number': 141})
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