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
            value: JSON.stringify({'card': 'pala32', 'embed_type': 1, 'array_number': 180})
          },
          {
            name: "BLESSED!",
            value: JSON.stringify({'card': 'pala31', 'embed_type': 1, 'array_number': 181})
          },
          {
            name: "CONSECRATION!",
            value: JSON.stringify({'card': 'pala30', 'embed_type': 1, 'array_number': 182})
          },
          {
            name: "DIVINE DEFENSE",
            value: JSON.stringify({'card': 'pala_divine_defense', 'embed_type': 123, 'array_number': 183})
          },
          {
            name: "DIVINE FAVOR!",
            value: JSON.stringify({'card': 'pala33', 'embed_type': 1, 'array_number': 184})
          },
          {
            name: "HOLY ATTACK",
            value: JSON.stringify({'card': 'pala_holy_attack', 'embed_type': 12, 'array_number': 185})
          },
          {
            name: "HOLY LIGHT",
            value: JSON.stringify({'card': 'pala_holy_light', 'embed_type': 12, 'array_number': 186})
          },
          {
            name: "MIGHTY PRAYER",
            value: JSON.stringify({'card': 'pala_mighty_prayer', 'embed_type': 123, 'array_number': 187})
          },
          {
            name: "MIGHTY!",
            value: JSON.stringify({'card': 'pala29', 'embed_type': 1, 'array_number': 188})
          },
          {
            name: "OFFENSIVE STANCE",
            value: JSON.stringify({'card': 'pala_offensive_stance', 'embed_type': 23, 'array_number': 189})
          },
          {
            name: "PROSPERITY",
            value: JSON.stringify({'card': 'pala_prosperity', 'embed_type': 23, 'array_number': 190})
          },
          {
            name: "REQUITAL",
            value: JSON.stringify({'card': 'pala_requital', 'embed_type': 23, 'array_number': 191})
          },
          {
            name: "RESOLUTE FAITH!",
            value: JSON.stringify({'card': 'pala_ult', 'embed_type': 1, 'array_number': 192})
          },
          {
            name: "RETALIATE",
            value: JSON.stringify({'card': 'pala_retaliate', 'embed_type': 123, 'array_number': 193})
          },
          {
            name: "RIGHTEOUS COMBAT",
            value: JSON.stringify({'card': 'pala_righteous_combat', 'embed_type': 1245, 'array_number': 194})
          },
          {
            name: "RIGHTEOUS PRAYER",
            value: JSON.stringify({'card': 'pala_righteous_prayer', 'embed_type': 123, 'array_number': 195})
          },
          {
            name: "STEADFAST",
            value: JSON.stringify({'card': 'pala_steadfast', 'embed_type': 45, 'array_number': 196})
          },
          {
            name: "TITHE",
            value: JSON.stringify({'card': 'pala_tithe', 'embed_type': 12, 'array_number': 197})
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