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
          value: "ambush"
        },
        {
          name: "BUNKER UP!",
          value: "bunker_up"
        },
        {
          name: "CARPET BOMB",
          value: "carpet_bomb"
        },
        {
          name: "COUNTERMEASURES",
          value: "countermeasures"
        },
        {
          name: "DISENGAGE!",
          value: "disengage"
        },
        {
          name: "EXPLOIT",
          value: "exploit"
        },
        {
          name: "FEIGNED RETREAT!",
          value: "feigned_retreat"
        },
        {
          name: "FLANK",
          value: "flank"
        },
        {
          name: "HIGHER GROUND!",
          value: "higher_ground"
        },
        {
          name: "INDIRECT APPROACH",
          value: "indirect_approach"
        },
        {
          name: "INTERDICTION",
          value: "interdiction"
        },
        {
          name: "MANEUVER",
          value: "maneuver"
        },
        {
          name: "PROFITEER",
          value: "profiteer"
        },
        {
          name: "RECONNAISSANCE",
          value: "reconnaissance"
        },
        {
          name: "SABER STRIKE",
          value: "saber_strike"
        },
        {
          name: "STRATEGIC APPROACH",
          value: "strategic_approach"
        },
        {
          name: "STRATEGIZE",
          value: "strategize"
        },
        {
          name: "UPPER HAND!",
          value: "upper_hand"
        },
        {
          name: "WAR ROOM!",
          value: "war_room"
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