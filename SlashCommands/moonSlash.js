const { Client, CommandInteraction } = require('discord.js');
const embedCreate = require("../events/embedCreate.js");


module.exports = {
    name: 'moon_elf_cards',
    description: 'Moon Elf cards',
    options: [{
        name: 'select_card',
        type: 'STRING',
        description: 'choose a card',
        required: true,
        choices: [
          {
            name: "BLINDING SHOT",
            value: "blinding_shot"
          },
          {
            name: "COVERED SHOT",
            value: "covered_shot"
          },
          {
            name: "DEMISING SHOT",
            value: "demising_shot"
          },
          {
            name: "ECLIPSE",
            value: "eclipse"
          },
          {
            name: "ENTANGLING SHOT",
            value: "entangling_shot"
          },
          {
            name: "EVADE!",
            value: "evade"
          },
          {
            name: "EVASIVE ACTION",
            value: "evasive_action"
          },
          {
            name: "EXPLODING ARROW",
            value: "exploding_arrow"
          },
          {
            name: "FOCUS",
            value: "focus"
          },
          {
            name: "LONGBOW",
            value: "longbow"
          },
          {
            name: "LUNAR BLESSING",
            value: "lunar_blessing"
          },
          {
            name: "LUNAR ECLIPSE!",
            value: "lunar_eclipse"
          },
          {
            name: "LUNAR UMBRA!",
            value: "lunar_umbra"
          },
          {
            name: "MISSED ME",
            value: "missed_me"
          },
          {
            name: "MOON MAGIC!",
            value: "moon_magic"
          },
          {
            name: "MOON SHADOW",
            value: "moon_shadow"
          },
          {
            name: "TAKE THAT!",
            value: "take_that"
          },
          {
            name: "VOLLEY!",
            value: "volley"
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