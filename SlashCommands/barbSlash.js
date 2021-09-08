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
            value: "adrenaline_surge"
          },
          {
            name: "CONCUSS!",
            value: "concuss"
          },
          {
            name: "CRIT BASH",
            value: "crit_bash"
          },
          {
            name: "CRIT SMASH",
            value: "crit_smash"
          },
          {
            name: "FEELIN' GOOD!",
            value: "feelin_good"
          },
          {
            name: "FORTITUDE",
            value: "fortitude"
          },
          {
            name: "GET SOME!",
            value: "get_some"
          },
          {
            name: "HEAD BASH!",
            value: "head_bash"
          },
          {
            name: "MIGHTY BLOW",
            value: "mighty_blow"
          },
          {
            name: "OVERPOWER",
            value: "overpower"
          },
          {
            name: "RAGE!",
            value: "rage"
          },
          {
            name: "RECKLESS",
            value: "reckless"
          },
          {
            name: "SMACK",
            value: "smack"
          },
          {
            name: "STURDY BLOW",
            value: "sturdy_blow"
          },
          {
            name: "THICK SKIN",
            value: "thick_skin"
          },
          {
            name: "WAR CRY",
            value: "war_cry"
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