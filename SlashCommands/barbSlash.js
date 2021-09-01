const { Client, CommandInteraction } = require('discord.js');
const embedCreate = require("../events/embedCreate.js");


module.exports = {
    name: 'barbarian_cards',
    description: 'Barbarian cards',
    options: [{
        name: 'select_card',
        type: 'STRING',
        description: 'choose a card',
        required: true,
        choices: [
          {
            name: "ADRENALINE SURGE!",
            value: JSON.stringify({'cardId': 'barb33', 'embedType': 2, 'arrayNumber': 38})
          },
          {
            name: "CONCUSS!",
            value: JSON.stringify({'cardId': 'barb29', 'embedType': 2, 'arrayNumber': 39})
          },
          {
            name: "CRIT BASH",
            value: JSON.stringify({'cardId': 'barb_crit_bash', 'embedType': 12345, 'arrayNumber': 40})
          },
          {
            name: "CRIT SMASH",
            value: JSON.stringify({'cardId': 'barb_crit_smash', 'embedType': 12345, 'arrayNumber': 41})
          },
          {
            name: "FEELIN' GOOD!",
            value: JSON.stringify({'cardId': 'barb32', 'embedType': 2, 'arrayNumber': 42})
          },
          {
            name: "FORTITUDE",
            value: JSON.stringify({'cardId': 'barb_fortitude', 'embedType': 134, 'arrayNumber': 43})
          },
          {
            name: "GET SOME!",
            value: JSON.stringify({'cardId': 'barb31', 'embedType': 12, 'arrayNumber': 44})
          },
          {
            name: "HEAD BASH!",
            value: JSON.stringify({'cardId': 'barb30', 'embedType': 2, 'arrayNumber': 45})
          },
          {
            name: "MIGHTY BLOW",
            value: JSON.stringify({'cardId': 'barb_mighty_blow', 'embedType': 1234, 'arrayNumber': 46})
          },
          {
            name: "OVERPOWER",
            value: JSON.stringify({'cardId': 'barb_overpower', 'embedType': 12345, 'arrayNumber': 47})
          },
          {
            name: "RAGE!",
            value: JSON.stringify({'cardId': 'barb_ult', 'embedType': 12, 'arrayNumber': 48})
          },
          {
            name: "RECKLESS",
            value: JSON.stringify({'cardId': 'barb_reckless', 'embedType': 1234, 'arrayNumber': 49})
          },
          {
            name: "SMACK",
            value: JSON.stringify({'cardId': 'barb_smack', 'embedType': 1346, 'arrayNumber': 50})
          },
          {
            name: "STURDY BLOW",
            value: JSON.stringify({'cardId': 'barb_sturdy_blow', 'embedType': 12346, 'arrayNumber': 51})
          },
          {
            name: "THICK SKIN",
            value: JSON.stringify({'cardId': 'barb_thick_skin', 'embedType': 1234, 'arrayNumber': 52})
          },
          {
            name: "WAR CRY",
            value: JSON.stringify({'cardId': 'barb_war_cry', 'embedType': 12345, 'arrayNumber': 53})
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