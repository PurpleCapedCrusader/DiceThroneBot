const { Client, CommandInteraction } = require('discord.js');
const embedCreate = require("../events/embedCreate.js");


module.exports = {
    name: 'shadow_thief_cards',
    description: 'Shadow Thief cards',
    options: [{
        name: 'select_card',
        type: 'STRING',
        description: 'choose a card',
        required: true,
        choices: [
          {
            name: "CARD TRICK!",
            value: "card_trick"
          },
          {
            name: "CARDUCOPIA",
            value: "carducopia"
          },
          {
            name: "COUNTER STRIKE",
            value: "counter_strike"
          },
          {
            name: "DAGGER STRIKE",
            value: "dagger_strike"
          },
          {
            name: "ENTER THE SHADOWS!",
            value: "enter_the_shadows"
          },
          {
            name: "INSIDIOUS STRIKE",
            value: "insidious_strike"
          },
          {
            name: "PICKPOCKET",
            value: "pickpocket"
          },
          {
            name: "POISON WOUND!",
            value: "poison_wound"
          },
          {
            name: "SHADOW COIN!",
            value: "shadow_coin"
          },
          {
            name: "SHADOW DANCE",
            value: "shadow_dance"
          },
          {
            name: "SHADOW DEFENSE",
            value: "shadow_defense"
          },
          {
            name: "SHADOW MELD!",
            value: "shadow_meld"
          },
          {
            name: "SHADOW SHANK!",
            value: "shadow_shank"
          },
          {
            name: "SHADOW STRIKE",
            value: "shadow_strike"
          },
          {
            name: "SHANK ATTACK",
            value: "shank_attack"
          },
          {
            name: "SHIFTY STRIKE",
            value: "shifty_strike"
          },
          {
            name: "SNEAKY!",
            value: "sneaky"
          },
          {
            name: "WILD SHADOW!",
            value: "wild_shadow"
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