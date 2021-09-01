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
          value: JSON.stringify({'cardId': 'tact32', 'embedType': 2, 'arrayNumber': 269})
        },
        {
          name: "BUNKER UP!",
          value: JSON.stringify({'cardId': 'tact28', 'embedType': 2, 'arrayNumber': 270})
        },
        {
          name: "CARPET BOMB",
          value: JSON.stringify({'cardId': 'tact_carpet_bomb', 'embedType': 12345, 'arrayNumber': 271})
        },
        {
          name: "COUNTERMEASURES",
          value: JSON.stringify({'cardId': 'tact_countermeasures', 'embedType': 12346, 'arrayNumber': 272})
        },
        {
          name: "DISENGAGE!",
          value: JSON.stringify({'cardId': 'tact31', 'embedType': 2, 'arrayNumber': 273})
        },
        {
          name: "EXPLOIT",
          value: JSON.stringify({'cardId': 'tact_exploit', 'embedType': 12345, 'arrayNumber': 274})
        },
        {
          name: "FEIGNED RETREAT!",
          value: JSON.stringify({'cardId': 'tact30', 'embedType': 2, 'arrayNumber': 275})
        },
        {
          name: "FLANK",
          value: JSON.stringify({'cardId': 'tact_flank', 'embedType': 1234, 'arrayNumber': 276})
        },
        {
          name: "HIGHER GROUND!",
          value: JSON.stringify({'cardId': 'tact_ult', 'embedType': 12, 'arrayNumber': 277})
        },
        {
          name: "INDIRECT APPROACH",
          value: JSON.stringify({'cardId': 'tact_indirect_approach', 'embedType': 12345, 'arrayNumber': 278})
        },
        {
          name: "INTERDICTION",
          value: JSON.stringify({'cardId': 'tact_interdiction', 'embedType': 12345, 'arrayNumber': 279})
        },
        {
          name: "MANEUVER",
          value: JSON.stringify({'cardId': 'tact_maneuver', 'embedType': 12345, 'arrayNumber': 280})
        },
        {
          name: "PROFITEER",
          value: JSON.stringify({'cardId': 'tact_profiteer', 'embedType': 1234, 'arrayNumber': 281})
        },
        {
          name: "RECONNAISSANCE",
          value: JSON.stringify({'cardId': 'tact_reconnaissance', 'embedType': 12345, 'arrayNumber': 282})
        },
        {
          name: "SABER STRIKE",
          value: JSON.stringify({'cardId': 'tact_saber_strike', 'embedType': 134, 'arrayNumber': 283})
        },
        {
          name: "STRATEGIC APPROACH",
          value: JSON.stringify({'cardId': 'tact_strategic_approach', 'embedType': 12345, 'arrayNumber': 284})
        },
        {
          name: "STRATEGIZE",
          value: JSON.stringify({'cardId': 'tact_strategize', 'embedType': 12345, 'arrayNumber': 285})
        },
        {
          name: "UPPER HAND!",
          value: JSON.stringify({'cardId': 'tact33', 'embedType': 2, 'arrayNumber': 286})
        },
        {
          name: "WAR ROOM!",
          value: JSON.stringify({'cardId': 'tact29', 'embedType': 2, 'arrayNumber': 287})
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