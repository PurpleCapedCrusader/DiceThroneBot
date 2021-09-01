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
            value: JSON.stringify({'cardId': 'monk_combo_strike', 'embedType': 1234, 'arrayNumber': 124})
          },
          {
            name: "CONTEMPLATE!",
            value: JSON.stringify({'cardId': 'monk32', 'embedType': 2, 'arrayNumber': 125})
          },
          {
            name: "ENLIGHTENMENT!",
            value: JSON.stringify({'cardId': 'monk33', 'embedType': 2, 'arrayNumber': 126})
          },
          {
            name: "FIST OF HARMONY",
            value: JSON.stringify({'cardId': 'monk_fist_of_harmony', 'embedType': 1234, 'arrayNumber': 127})
          },
          {
            name: "FIST OF TRANQUILITY",
            value: JSON.stringify({'cardId': 'monk_fist_of_tranquility', 'embedType': 12345, 'arrayNumber': 128})
          },
          {
            name: "FIST STRIKE",
            value: JSON.stringify({'cardId': 'monk_fist_strike', 'embedType': 136, 'arrayNumber': 129})
          },
          {
            name: "LOTUS STRIKE",
            value: JSON.stringify({'cardId': 'monk_lotus_strike', 'embedType': 12345, 'arrayNumber': 130})
          },
          {
            name: "MEDITATE",
            value: JSON.stringify({'cardId': 'monk_meditate', 'embedType': 12345, 'arrayNumber': 131})
          },
          {
            name: "MYSTIC MANTRA!",
            value: JSON.stringify({'cardId': 'monk30', 'embedType': 2, 'arrayNumber': 132})
          },
          {
            name: "PALM STRIKE!",
            value: JSON.stringify({'cardId': 'monk29', 'embedType': 2, 'arrayNumber': 133})
          },
          {
            name: "RUMINATE!",
            value: JSON.stringify({'cardId': 'monk31', 'embedType': 2, 'arrayNumber': 134})
          },
          {
            name: "SERENITY",
            value: JSON.stringify({'cardId': 'monk_serenity', 'embedType': 12346, 'arrayNumber': 135})
          },
          {
            name: "TEMPEST RUSH",
            value: JSON.stringify({'cardId': 'monk_tempest_rush', 'embedType': 1234, 'arrayNumber': 136})
          },
          {
            name: "TRANSCENDENCE!",
            value: JSON.stringify({'cardId': 'monk_ult', 'embedType': 12, 'arrayNumber': 137})
          },
          {
            name: "WAY OF THE LOTUS",
            value: JSON.stringify({'cardId': 'monk_way_of_the_lotus', 'embedType': 12345, 'arrayNumber': 138})
          },
          {
            name: "WAY OF THE MONK",
            value: JSON.stringify({'cardId': 'monk_way_of_the_monk', 'embedType': 12345, 'arrayNumber': 139})
          },
          {
            name: "ZEN STRIKE",
            value: JSON.stringify({'cardId': 'monk_zen_strike', 'embedType': 12345, 'arrayNumber': 140})
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