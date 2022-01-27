const { Client, CommandInteraction } = require('discord.js');
const embedCreate = require("../events/embedCreate.js");


module.exports = {
    name: 'pyromancer_cards',
    description: 'Pyromancer cards',
    options: [{
        name: 'select_card',
        type: 'STRING',
        description: 'choose a card',
        required: true,
        choices: [
          {
            name: "BLAZING SOUL",
            value: "blazing_soul"
          },
          {
            name: "BURNING SOUL",
            value: "burning_soul"
          },
          {
            name: "COMBUSTION",
            value: "combustion"
          },
          {
            name: "FIRE UP!",
            value: "fire_up"
          },
          {
            name: "FIREBALL",
            value: "fireball"
          },
          {
            name: "HOT STREAK",
            value: "hot_streak"
          },
          {
            name: "HUZZAH!",
            value: "huzzah"
          },
          {
            name: "IGNITE",
            value: "ignite"
          },
          {
            name: "INFERNAL INFUSION!",
            value: "infernal_infusion"
          },
          {
            name: "METEORITE",
            value: "meteorite"
          },
          {
            name: "METEOROID",
            value: "meteoroid"
          },
          {
            name: "MOLTEN ARMOR",
            value: "molten_armor"
          },
          {
            name: "PYROBLAST",
            value: "pyroblast"
          },
          {
            name: "RED HOT!",
            value: "red_hot"
          },
          {
            name: "SCORCH",
            value: "scorch"
          },
          {
            name: "SCORCH THE EARTH!",
            value: "scorch_the_earth"
          },
          {
            name: "WARM UP!",
            value: "warm_up"
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