const { Client, CommandInteraction } = require('discord.js');
const embedCreate = require("../events/embedCreate.js");


module.exports = {
    name: 'huntress_cards',
    description: 'Huntress cards',
    options: [{
        name: 'select_card',
        type: 'STRING',
        description: 'choose a card',
        required: true,
        choices: [
          {
            name: "ANIMALISTIC",
            value: JSON.stringify({'cardId': 'hunt_animalistic', 'embedType': 134, 'arrayNumber': 105})
          },
          {
            name: "BLOOD BOND!",
            value: JSON.stringify({'cardId': 'hunt28', 'embedType': 2, 'arrayNumber': 106})
          },
          {
            name: "FERAL",
            value: JSON.stringify({'cardId': 'hunt_feral', 'embedType': 12345, 'arrayNumber': 107})
          },
          {
            name: "FERAL INSTINCTS",
            value: JSON.stringify({'cardId': 'hunt_feral_instincts', 'embedType': 12345, 'arrayNumber': 108})
          },
          {
            name: "FEROCIOUS",
            value: JSON.stringify({'cardId': 'hunt_ferocious', 'embedType': 12345, 'arrayNumber': 109})
          },
          {
            name: "HUNT",
            value: JSON.stringify({'cardId': 'hunt_hunt', 'embedType': 12345, 'arrayNumber': 110})
          },
          {
            name: "JUGULAR",
            value: JSON.stringify({'cardId': 'hunt_jugular', 'embedType': 12345, 'arrayNumber': 111})
          },
          {
            name: "JUNGLE FURY!",
            value: JSON.stringify({'cardId': 'hunt_ult', 'embedType': 12, 'arrayNumber': 112})
          },
          {
            name: "MATERNAL BOND",
            value: JSON.stringify({'cardId': 'hunt_maternal_bond', 'embedType': 12346, 'arrayNumber': 113})
          },
          {
            name: "ONSLAUGHT",
            value: JSON.stringify({'cardId': 'hunt_onslaught', 'embedType': 1234, 'arrayNumber': 114})
          },
          {
            name: "POUNCE!",
            value: JSON.stringify({'cardId': 'hunt30', 'embedType': 12, 'arrayNumber': 115})
          },
          {
            name: "PREDATORY ADVANCE",
            value: JSON.stringify({'cardId': 'hunt_predatory_advance', 'embedType': 12345, 'arrayNumber': 116})
          },
          {
            name: "PRIMAL ROAR!",
            value: JSON.stringify({'cardId': 'hunt33', 'embedType': 2, 'arrayNumber': 117})
          },
          {
            name: "PROWL!",
            value: JSON.stringify({'cardId': 'hunt31', 'embedType': 12, 'arrayNumber': 118})
          },
          {
            name: "RESILIENT!",
            value: JSON.stringify({'cardId': 'hunt32', 'embedType': 2, 'arrayNumber': 119})
          },
          {
            name: "RESUSCITATE",
            value: JSON.stringify({'cardId': 'hunt_resuscitate', 'embedType': 1234, 'arrayNumber': 120})
          },
          {
            name: "SAVAGE",
            value: JSON.stringify({'cardId': 'hunt_savage', 'embedType': 12345, 'arrayNumber': 121})
          },
          {
            name: "SAVAGE SLASH!",
            value: JSON.stringify({'cardId': 'hunt29', 'embedType': 2, 'arrayNumber': 122})
          },
          {
            name: "SWIPE",
            value: JSON.stringify({'cardId': 'hunt_swipe', 'embedType': 12345, 'arrayNumber': 123})
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