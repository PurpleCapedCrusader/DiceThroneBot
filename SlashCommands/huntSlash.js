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
            value: "animalistic"
          },
          {
            name: "BLOOD BOND!",
            value: "blood_bond"
          },
          {
            name: "FERAL",
            value: "feral"
          },
          {
            name: "FERAL INSTINCTS",
            value: "feral_instincts"
          },
          {
            name: "FEROCIOUS",
            value: "ferocious"
          },
          {
            name: "HUNT",
            value: "hunt"
          },
          {
            name: "JUGULAR",
            value: "jugular"
          },
          {
            name: "JUNGLE FURY!",
            value: "jungle_fury"
          },
          {
            name: "MATERNAL BOND",
            value: "maternal_bond"
          },
          {
            name: "ONSLAUGHT",
            value: "onslaught"
          },
          {
            name: "POUNCE!",
            value: "pounce"
          },
          {
            name: "PREDATORY ADVANCE",
            value: "predatory_advance"
          },
          {
            name: "PRIMAL ROAR!",
            value: "primal_roar"
          },
          {
            name: "PROWL!",
            value: "prowl"
          },
          {
            name: "RESILIENT!",
            value: "resilient"
          },
          {
            name: "RESUSCITATE",
            value: "resuscitate"
          },
          {
            name: "SAVAGE",
            value: "savage"
          },
          {
            name: "SAVAGE SLASH!",
            value: "savage_slash"
          },
          {
            name: "SWIPE",
            value: "swipe"
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