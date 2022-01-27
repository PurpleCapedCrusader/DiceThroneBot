const { Client, CommandInteraction } = require('discord.js');
const embedCreate = require("../events/embedCreate.js");


module.exports = {
    name: 'vampire_lord_cards',
    description: 'Vampire Lord cards',
    options: [{
        name: 'select_card',
        type: 'STRING',
        description: 'choose a card',
        required: true,
        choices: [
          {
            name: "BLOOD BOIL!",
            value: "blood_boil"
          },
          {
            name: "BLOOD FLOW!",
            value: "blood_flow"
          },
          {
            name: "BLOOD LETTING!",
            value: "blood_letting"
          },
          {
            name: "BLOOD MAGIC",
            value: "blood_magic"
          },
          {
            name: "BLOOD THIRST",
            value: "blood_thirst"
          },
          {
            name: "BLOOD TIDE!",
            value: "blood_tide"
          },
          {
            name: "CONSUME BLOOD!",
            value: "consume_blood"
          },
          {
            name: "DARK OMEN!",
            value: "dark_omen"
          },
          {
            name: "DRAW BLOOD",
            value: "draw_blood"
          },
          {
            name: "EXSANGUINATE!",
            value: "exsanguinate"
          },
          {
            name: "GASH",
            value: "gash"
          },
          {
            name: "GLAMOUR",
            value: "glamour"
          },
          {
            name: "GOUGE",
            value: "gouge"
          },
          {
            name: "HEMORRHAGE",
            value: "hemorrhage"
          },
          {
            name: "IMMORTAL FLESH",
            value: "immortal_flesh"
          },
          {
            name: "INFLUENCE",
            value: "influence"
          },
          {
            name: "LIMB FROM LIMB!",
            value: "limb_from_limb"
          },
          {
            name: "POSSESS",
            value: "possess"
          },
          {
            name: "PRESENCE",
            value: "presence"
          },
          {
            name: "REND",
            value: "rend"
          },
          {
            name: "SANGUIMANCY",
            value: "sanguimancy"
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