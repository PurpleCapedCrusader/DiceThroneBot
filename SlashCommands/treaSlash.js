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
            value: JSON.stringify({'card': 'trea_bitterroot', 'embed_type': 23, 'array_number': 289})
          },
          {
            name: "CALL OF THE WILD",
            value: JSON.stringify({'card': 'trea_call_of_the_wild', 'embed_type': 123, 'array_number': 290})
          },
          {
            name: "CULTIVATE",
            value: JSON.stringify({'card': 'trea_cultivate', 'embed_type': 23, 'array_number': 291})
          },
          {
            name: "CULTIVATE!",
            value: JSON.stringify({'card': 'trea28', 'embed_type': 1, 'array_number': 292})
          },
          {
            name: "DOWN POUR!",
            value: JSON.stringify({'card': 'trea30', 'embed_type': 1, 'array_number': 293})
          },
          {
            name: "DRINK DEEP!",
            value: JSON.stringify({'card': 'trea32', 'embed_type': 1, 'array_number': 294})
          },
          {
            name: "ENRAPTURE",
            value: JSON.stringify({'card': 'trea_enrapture', 'embed_type': 23, 'array_number': 295})
          },
          {
            name: "FERTILIZE",
            value: JSON.stringify({'card': 'trea_fertilize', 'embed_type': 1, 'array_number': 296})
          },
          {
            name: "HARVEST!",
            value: JSON.stringify({'card': 'trea27', 'embed_type': 1, 'array_number': 297})
          },
          {
            name: "MOTHER TREE!",
            value: JSON.stringify({'card': 'trea33', 'embed_type': 1, 'array_number': 298})
          },
          {
            name: "NATURE'S BLESSING",
            value: JSON.stringify({'card': 'trea_natures_blessing', 'embed_type': 23, 'array_number': 299})
          },
          {
            name: "NATURE'S GRASP",
            value: JSON.stringify({'card': 'trea_natures_grasp', 'embed_type': 123, 'array_number': 300})
          },
          {
            name: "OVERGROWTH",
            value: JSON.stringify({'card': 'trea_overgrowth', 'embed_type': 123, 'array_number': 301})
          },
          {
            name: "PLANT",
            value: JSON.stringify({'card': 'trea_plant', 'embed_type': 23, 'array_number': 302})
          },
          {
            name: "ROOTED",
            value: JSON.stringify({'card': 'trea_rooted', 'embed_type': 12, 'array_number': 303})
          },
          {
            name: "SPLINTER",
            value: JSON.stringify({'card': 'trea_splinter', 'embed_type': 124, 'array_number': 304})
          },
          {
            name: "STOMP!",
            value: JSON.stringify({'card': 'trea31', 'embed_type': 1, 'array_number': 305})
          },
          {
            name: "TEND",
            value: JSON.stringify({'card': 'trea_tend', 'embed_type': 123, 'array_number': 306})
          },
          {
            name: "VENGEFUL VINES",
            value: JSON.stringify({'card': 'trea_vengeful_vines', 'embed_type': 123, 'array_number': 307})
          },
          {
            name: "WAKE THE FOREST!",
            value: JSON.stringify({'card': 'trea_ult', 'embed_type': 1, 'array_number': 308})
          },
          {
            name: "WILL O' WISP!",
            value: JSON.stringify({'card': 'trea29', 'embed_type': 1, 'array_number': 309})
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