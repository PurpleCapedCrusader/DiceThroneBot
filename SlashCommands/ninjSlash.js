const { Client, CommandInteraction } = require('discord.js');
const embedCreate = require("../events/embedCreate.js");


module.exports = {
    name: 'ninja_cards',
    description: 'Ninja cards',
    options: [{
        name: 'select_card',
        type: 'STRING',
        description: 'choose a card',
        required: true,
        choices: [
          {
            name: "ASSASSINATE!",
            value: "assassinate"
          },
          {
            name: "DEATH BLOSSOM",
            value: "death_blossom"
          },
          {
            name: "DOJO!",
            value: "dojo"
          },
          {
            name: "ESCAPE!",
            value: "escape"
          },
          {
            name: "FAN OF KNIVES!",
            value: "fan_of_knives"
          },
          {
            name: "JUGULATE",
            value: "jugulate"
          },
          {
            name: "KUJI-KIRI",
            value: "kujikiri"
          },
          {
            name: "MISDIRECT",
            value: "misdirect"
          },
          {
            name: "POISON BLADE",
            value: "poison_blade"
          },
          {
            name: "POISON DART!",
            value: "poison_dart"
          },
          {
            name: "SHADE SHIFT",
            value: "shade_shift"
          },
          {
            name: "SHADEWALK",
            value: "shadewalk"
          },
          {
            name: "SHADOW FANG",
            value: "shadow_fang"
          },
          {
            name: "SLASH",
            value: "slash"
          },
          {
            name: "SMOKE OFFERING!",
            value: "smoke_offering"
          },
          {
            name: "SMOKE SCREEN",
            value: "smoke_screen"
          },
          {
            name: "THROWING STARS!",
            value: "throwing_stars"
          },
          {
            name: "TIP OF THE BLADE",
            value: "tip_of_the_blade"
          },
          {
            name: "TRAIN!",
            value: "train"
          },
          {
            name: "WALK THE LINE",
            value: "walk_the_line"
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