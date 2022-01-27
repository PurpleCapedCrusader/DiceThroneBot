const { Client, CommandInteraction } = require('discord.js');
const embedCreate = require("../events/embedCreate.js");


module.exports = {
    name: 'seraph_cards',
    description: 'Seraph cards',
    options: [{
        name: 'select_card',
        type: 'STRING',
        description: 'choose a card',
        required: true,
        choices: [
          {
            name: "ANGELIC COMBAT!",
            value: "angelic_combat"
          },
          {
            name: "ANGELIC MANTLE",
            value: "angelic_mantle"
          },
          {
            name: "ARCHANGEL'S WILL",
            value: "archangels_will"
          },
          {
            name: "CHERUBIM",
            value: "cherubim"
          },
          {
            name: "DIVINE INTERVENTION!",
            value: "divine_intervention"
          },
          {
            name: "DIVINE VISAGE",
            value: "divine_visage"
          },
          {
            name: "GLORIOUS",
            value: "glorious"
          },
          {
            name: "HEAVEN'S BLESSING",
            value: "heavens_blessing"
          },
          {
            name: "HIGHEST POWER",
            value: "highest_power"
          },
          {
            name: "HOLIER THAN THOU!",
            value: "holier_than_thou"
          },
          {
            name: "HOLY BLADE",
            value: "holy_blade"
          },
          {
            name: "HOLY COMMAND",
            value: "holy_command"
          },
          {
            name: "HOLY SMITE",
            value: "holy_smite"
          },
          {
            name: "PURIFY",
            value: "purify"
          },
          {
            name: "SMOTE!",
            value: "smote"
          },
          {
            name: "SPLIT THE HEAVENS!",
            value: "split_the_heavens"
          },
          {
            name: "TAKE FLIGHT",
            value: "take_flight"
          },
          {
            name: "TO THE SKIES!",
            value: "to_the_skies"
          },
          {
            name: "TRIUMPHANT",
            value: "triumphant"
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