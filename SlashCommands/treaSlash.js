const { Client, CommandInteraction } = require('discord.js');
const embedCreate = require("../events/embedCreate.js");


module.exports = {
    name: 'treant_cards',
    description: 'Treant cards',
    options: [{
        name: 'select_card',
        type: 'STRING',
        description: 'choose a card',
        required: true,
        choices: [
          {
            name: "BITTERROOT",
            value: "bitterroot"
          },
          {
            name: "CALL OF THE WILD",
            value: "call_of_the_wild"
          },
          {
            name: "CULTIVATE",
            value: "cultivate"
          },
          {
            name: "CULTIVATE!",
            value: "cultivate"
          },
          {
            name: "DOWN POUR!",
            value: "down_pour"
          },
          {
            name: "DRINK DEEP!",
            value: "drink_deep"
          },
          {
            name: "ENRAPTURE",
            value: "enrapture"
          },
          {
            name: "FERTILIZE",
            value: "fertilize"
          },
          {
            name: "HARVEST!",
            value: "harvest"
          },
          {
            name: "MOTHER TREE!",
            value: "mother_tree"
          },
          {
            name: "NATURE'S BLESSING",
            value: "natures_blessing"
          },
          {
            name: "NATURE'S GRASP",
            value: "natures_grasp"
          },
          {
            name: "OVERGROWTH",
            value: "overgrowth"
          },
          {
            name: "PLANT",
            value: "plant"
          },
          {
            name: "ROOTED",
            value: "rooted"
          },
          {
            name: "SPLINTER",
            value: "splinter"
          },
          {
            name: "STOMP!",
            value: "stomp"
          },
          {
            name: "TEND",
            value: "tend"
          },
          {
            name: "VENGEFUL VINES",
            value: "vengeful_vines"
          },
          {
            name: "WAKE THE FOREST!",
            value: "wake_the_forest"
          },
          {
            name: "WILL O' WISP!",
            value: "will_o_wisp"
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