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
            value: "absolution"
          },
          {
            name: "BLESSED!",
            value: "blessed"
          },
          {
            name: "CONSECRATION!",
            value: "consecration"
          },
          {
            name: "DIVINE DEFENSE",
            value: "divine_defense"
          },
          {
            name: "DIVINE FAVOR!",
            value: "divine_favor"
          },
          {
            name: "HOLY ATTACK",
            value: "holy_attack"
          },
          {
            name: "HOLY LIGHT",
            value: "holy_light"
          },
          {
            name: "MIGHTY PRAYER",
            value: "mighty_prayer"
          },
          {
            name: "MIGHTY!",
            value: "mighty"
          },
          {
            name: "OFFENSIVE STANCE",
            value: "offensive_stance"
          },
          {
            name: "PROSPERITY",
            value: "prosperity"
          },
          {
            name: "REQUITAL",
            value: "requital"
          },
          {
            name: "RESOLUTE FAITH!",
            value: "resolute_faith"
          },
          {
            name: "RETALIATE",
            value: "retaliate"
          },
          {
            name: "RIGHTEOUS COMBAT",
            value: "righteous_combat"
          },
          {
            name: "RIGHTEOUS PRAYER",
            value: "righteous_prayer"
          },
          {
            name: "STEADFAST",
            value: "steadfast"
          },
          {
            name: "TITHE",
            value: "tithe"
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