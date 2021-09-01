const { Client, CommandInteraction } = require('discord.js');
const embedCreate = require("../events/embedCreate.js");


module.exports = {
    name: 'paladin_cards',
    description: 'Paladin cards',
    options: [{
        name: 'select_card',
        type: 'STRING',
        description: 'choose a card',
        required: true,
        choices: [
          {
            name: "ABSOLUTION!",
            value: JSON.stringify({'cardId': 'pala32', 'embedType': 2, 'arrayNumber': 179})
          },
          {
            name: "BLESSED!",
            value: JSON.stringify({'cardId': 'pala31', 'embedType': 2, 'arrayNumber': 180})
          },
          {
            name: "CONSECRATION!",
            value: JSON.stringify({'cardId': 'pala30', 'embedType': 2, 'arrayNumber': 181})
          },
          {
            name: "DIVINE DEFENSE",
            value: JSON.stringify({'cardId': 'pala_divine_defense', 'embedType': 12346, 'arrayNumber': 182})
          },
          {
            name: "DIVINE FAVOR!",
            value: JSON.stringify({'cardId': 'pala33', 'embedType': 2, 'arrayNumber': 183})
          },
          {
            name: "HOLY ATTACK",
            value: JSON.stringify({'cardId': 'pala_holy_attack', 'embedType': 1234, 'arrayNumber': 184})
          },
          {
            name: "HOLY LIGHT",
            value: JSON.stringify({'cardId': 'pala_holy_light', 'embedType': 1234, 'arrayNumber': 185})
          },
          {
            name: "MIGHTY PRAYER",
            value: JSON.stringify({'cardId': 'pala_mighty_prayer', 'embedType': 12345, 'arrayNumber': 186})
          },
          {
            name: "MIGHTY!",
            value: JSON.stringify({'cardId': 'pala29', 'embedType': 2, 'arrayNumber': 187})
          },
          {
            name: "OFFENSIVE STANCE",
            value: JSON.stringify({'cardId': 'pala_offensive_stance', 'embedType': 12345, 'arrayNumber': 188})
          },
          {
            name: "PROSPERITY",
            value: JSON.stringify({'cardId': 'pala_prosperity', 'embedType': 12345, 'arrayNumber': 189})
          },
          {
            name: "REQUITAL",
            value: JSON.stringify({'cardId': 'pala_requital', 'embedType': 12345, 'arrayNumber': 190})
          },
          {
            name: "RESOLUTE FAITH!",
            value: JSON.stringify({'cardId': 'pala_ult', 'embedType': 12, 'arrayNumber': 191})
          },
          {
            name: "RETALIATE",
            value: JSON.stringify({'cardId': 'pala_retaliate', 'embedType': 12345, 'arrayNumber': 192})
          },
          {
            name: "RIGHTEOUS COMBAT",
            value: JSON.stringify({'cardId': 'pala_righteous_combat', 'embedType': 123467, 'arrayNumber': 193})
          },
          {
            name: "RIGHTEOUS PRAYER",
            value: JSON.stringify({'cardId': 'pala_righteous_prayer', 'embedType': 12345, 'arrayNumber': 194})
          },
          {
            name: "STEADFAST",
            value: JSON.stringify({'cardId': 'pala_steadfast', 'embedType': 123467, 'arrayNumber': 195})
          },
          {
            name: "TITHE",
            value: JSON.stringify({'cardId': 'pala_tithe', 'embedType': 1234, 'arrayNumber': 196})
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