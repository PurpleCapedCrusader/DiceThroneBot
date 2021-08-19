const { Client, CommandInteraction } = require('discord.js');
const embedCreate = require("../events/embedCreate.js");


module.exports = {
  name: 'tactician_cards',
  description: 'Tactician cards',
  options: [{
      name: 'select_card',
      type: 'STRING',
      description: 'choose a card',
      required: true,
      choices: [
        {
          name: "AMBUSH!",
          value: JSON.stringify({'card': 'tact32', 'embed_type': 1, 'array_number': 270})
        },
        {
          name: "BUNKER UP!",
          value: JSON.stringify({'card': 'tact28', 'embed_type': 1, 'array_number': 271})
        },
        {
          name: "CARPET BOMB",
          value: JSON.stringify({'card': 'tact_carpet_bomb', 'embed_type': 123, 'array_number': 272})
        },
        {
          name: "COUNTERMEASURES",
          value: JSON.stringify({'card': 'tact_countermeasures', 'embed_type': 124, 'array_number': 273})
        },
        {
          name: "DISENGAGE!",
          value: JSON.stringify({'card': 'tact31', 'embed_type': 1, 'array_number': 274})
        },
        {
          name: "EXPLOIT",
          value: JSON.stringify({'card': 'tact_exploit', 'embed_type': 123, 'array_number': 275})
        },
        {
          name: "FEIGNED RETREAT!",
          value: JSON.stringify({'card': 'tact30', 'embed_type': 1, 'array_number': 276})
        },
        {
          name: "FLANK",
          value: JSON.stringify({'card': 'tact_flank', 'embed_type': 12, 'array_number': 277})
        },
        {
          name: "HIGHER GROUND!",
          value: JSON.stringify({'card': 'tact_ult', 'embed_type': 1, 'array_number': 278})
        },
        {
          name: "INDIRECT APPROACH",
          value: JSON.stringify({'card': 'tact_indirect_approach', 'embed_type': 23, 'array_number': 279})
        },
        {
          name: "INTERDICTION",
          value: JSON.stringify({'card': 'tact_interdiction', 'embed_type': 23, 'array_number': 280})
        },
        {
          name: "MANEUVER",
          value: JSON.stringify({'card': 'tact_maneuver', 'embed_type': 123, 'array_number': 281})
        },
        {
          name: "PROFITEER",
          value: JSON.stringify({'card': 'tact_profiteer', 'embed_type': 12, 'array_number': 282})
        },
        {
          name: "RECONNAISSANCE",
          value: JSON.stringify({'card': 'tact_reconnaissance', 'embed_type': 23, 'array_number': 283})
        },
        {
          name: "SABER STRIKE",
          value: JSON.stringify({'card': 'tact_saber_strike', 'embed_type': 12, 'array_number': 284})
        },
        {
          name: "STRATEGIC APPROACH",
          value: JSON.stringify({'card': 'tact_strategic_approach', 'embed_type': 123, 'array_number': 285})
        },
        {
          name: "STRATEGIZE",
          value: JSON.stringify({'card': 'tact_strategize', 'embed_type': 23, 'array_number': 286})
        },
        {
          name: "UPPER HAND!",
          value: JSON.stringify({'card': 'tact33', 'embed_type': 1, 'array_number': 287})
        },
        {
          name: "WAR ROOM!",
          value: JSON.stringify({'card': 'tact29', 'embed_type': 1, 'array_number': 288})
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
      const response = JSON.parse(args)
      embedCreate.embedCreate(response.card, response.embed_type);
    },
};