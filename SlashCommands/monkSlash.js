const { Client, CommandInteraction } = require('discord.js');
const embedCreate = require("../events/embedCreate.js");


module.exports = {
    name: 'monk_cards',
    description: 'Monk cards',
    options: [{
        name: 'select_card',
        type: 'STRING',
        description: 'choose a card',
        required: true,
        choices: [
          {
            name: "COMBO STRIKE",
            value: "combo_strike"
          },
          {
            name: "CONTEMPLATE!",
            value: "contemplate"
          },
          {
            name: "ENLIGHTENMENT!",
            value: "enlightenment"
          },
          {
            name: "FIST OF HARMONY",
            value: "fist_of_harmony"
          },
          {
            name: "FIST OF TRANQUILITY",
            value: "fist_of_tranquility"
          },
          {
            name: "FIST STRIKE",
            value: "fist_strike"
          },
          {
            name: "LOTUS STRIKE",
            value: "lotus_strike"
          },
          {
            name: "MEDITATE",
            value: "meditate"
          },
          {
            name: "MYSTIC MANTRA!",
            value: "mystic_mantra"
          },
          {
            name: "PALM STRIKE!",
            value: "palm_strike"
          },
          {
            name: "RUMINATE!",
            value: "ruminate"
          },
          {
            name: "SERENITY",
            value: "serenity"
          },
          {
            name: "TEMPEST RUSH",
            value: "tempest_rush"
          },
          {
            name: "TRANSCENDENCE!",
            value: "transcendence"
          },
          {
            name: "WAY OF THE LOTUS",
            value: "way_of_the_lotus"
          },
          {
            name: "WAY OF THE MONK",
            value: "way_of_the_monk"
          },
          {
            name: "ZEN STRIKE",
            value: "zen_strike"
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