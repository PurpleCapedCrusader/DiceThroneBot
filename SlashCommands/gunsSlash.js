const { Client, CommandInteraction } = require('discord.js');
const embedCreate = require("../events/embedCreate.js");


module.exports = {
    name: 'gunslinger_cards',
    description: 'Gunslinger cards',
    options: [{
        name: 'select_card',
        type: 'STRING',
        description: 'choose a card',
        required: true,
        choices: [
          {
            name: "BOUNTY HUNTER",
            value: "bounty_hunter"
          },
          {
            name: "DEADEYE",
            value: "deadeye"
          },
          {
            name: "DUEL",
            value: "duel"
          },
          {
            name: "EAT LEAD!",
            value: "eat_lead"
          },
          {
            name: "ENFORCER",
            value: "enforcer"
          },
          {
            name: "FAN THE HAMMER",
            value: "fan_the_hammer"
          },
          {
            name: "FILL'EM WITH LEAD!",
            value: "fillem_with_lead"
          },
          {
            name: "MARK THE TARGET",
            value: "mark_the_target"
          },
          {
            name: "PISTOL WHIP",
            value: "pistol_whip"
          },
          {
            name: "QUICK DRAW",
            value: "quick_draw"
          },
          {
            name: "REVOLVER",
            value: "revolver"
          },
          {
            name: "ROULETTE!",
            value: "roulette"
          },
          {
            name: "RUN AND GUN!",
            value: "run_and_gun"
          },
          {
            name: "SHOWDOWN",
            value: "showdown"
          },
          {
            name: "SPIN THE CHAMBER!",
            value: "spin_the_chamber"
          },
          {
            name: "TAKE COVER",
            value: "take_cover"
          },
          {
            name: "WANTED!",
            value: "wanted"
          },
          {
            name: "WILD WEST!",
            value: "wild_west"
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