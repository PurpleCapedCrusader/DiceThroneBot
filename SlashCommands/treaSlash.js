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
            value: JSON.stringify({'cardId': 'trea_bitterroot', 'embedType': 12345, 'arrayNumber': 288})
          },
          {
            name: "CALL OF THE WILD",
            value: JSON.stringify({'cardId': 'trea_call_of_the_wild', 'embedType': 12345, 'arrayNumber': 289})
          },
          {
            name: "CULTIVATE",
            value: JSON.stringify({'cardId': 'trea_cultivate', 'embedType': 12345, 'arrayNumber': 290})
          },
          {
            name: "CULTIVATE!",
            value: JSON.stringify({'cardId': 'trea28', 'embedType': 2, 'arrayNumber': 291})
          },
          {
            name: "DOWN POUR!",
            value: JSON.stringify({'cardId': 'trea30', 'embedType': 2, 'arrayNumber': 292})
          },
          {
            name: "DRINK DEEP!",
            value: JSON.stringify({'cardId': 'trea32', 'embedType': 2, 'arrayNumber': 293})
          },
          {
            name: "ENRAPTURE",
            value: JSON.stringify({'cardId': 'trea_enrapture', 'embedType': 12345, 'arrayNumber': 294})
          },
          {
            name: "FERTILIZE",
            value: JSON.stringify({'cardId': 'trea_fertilize', 'embedType': 12, 'arrayNumber': 295})
          },
          {
            name: "HARVEST!",
            value: JSON.stringify({'cardId': 'trea27', 'embedType': 2, 'arrayNumber': 296})
          },
          {
            name: "MOTHER TREE!",
            value: JSON.stringify({'cardId': 'trea33', 'embedType': 2, 'arrayNumber': 297})
          },
          {
            name: "NATURE'S BLESSING",
            value: JSON.stringify({'cardId': 'trea_natures_blessing', 'embedType': 12345, 'arrayNumber': 298})
          },
          {
            name: "NATURE'S GRASP",
            value: JSON.stringify({'cardId': 'trea_natures_grasp', 'embedType': 12345, 'arrayNumber': 299})
          },
          {
            name: "OVERGROWTH",
            value: JSON.stringify({'cardId': 'trea_overgrowth', 'embedType': 12345, 'arrayNumber': 300})
          },
          {
            name: "PLANT",
            value: JSON.stringify({'cardId': 'trea_plant', 'embedType': 12345, 'arrayNumber': 301})
          },
          {
            name: "ROOTED",
            value: JSON.stringify({'cardId': 'trea_rooted', 'embedType': 1234, 'arrayNumber': 302})
          },
          {
            name: "SPLINTER",
            value: JSON.stringify({'cardId': 'trea_splinter', 'embedType': 12346, 'arrayNumber': 303})
          },
          {
            name: "STOMP!",
            value: JSON.stringify({'cardId': 'trea31', 'embedType': 12, 'arrayNumber': 304})
          },
          {
            name: "TEND",
            value: JSON.stringify({'cardId': 'trea_tend', 'embedType': 12345, 'arrayNumber': 305})
          },
          {
            name: "VENGEFUL VINES",
            value: JSON.stringify({'cardId': 'trea_vengeful_vines', 'embedType': 12345, 'arrayNumber': 306})
          },
          {
            name: "WAKE THE FOREST!",
            value: JSON.stringify({'cardId': 'trea_ult', 'embedType': 12, 'arrayNumber': 307})
          },
          {
            name: "WILL O' WISP!",
            value: JSON.stringify({'cardId': 'trea29', 'embedType': 2, 'arrayNumber': 308})
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