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
            value: JSON.stringify({'cardId': 'vamp31', 'embedType': 12, 'arrayNumber': 309})
          },
          {
            name: "BLOOD FLOW!",
            value: JSON.stringify({'cardId': 'vamp33', 'embedType': 2, 'arrayNumber': 310})
          },
          {
            name: "BLOOD LETTING!",
            value: JSON.stringify({'cardId': 'vamp29', 'embedType': 2, 'arrayNumber': 311})
          },
          {
            name: "BLOOD MAGIC",
            value: JSON.stringify({'cardId': 'vamp_blood_magic', 'embedType': 12345, 'arrayNumber': 312})
          },
          {
            name: "BLOOD THIRST",
            value: JSON.stringify({'cardId': 'vamp_blood_thirst', 'embedType': 12345, 'arrayNumber': 313})
          },
          {
            name: "BLOOD TIDE!",
            value: JSON.stringify({'cardId': 'vamp34', 'embedType': 2, 'arrayNumber': 314})
          },
          {
            name: "CONSUME BLOOD!",
            value: JSON.stringify({'cardId': 'vamp28', 'embedType': 2, 'arrayNumber': 315})
          },
          {
            name: "DARK OMEN!",
            value: JSON.stringify({'cardId': 'vamp30', 'embedType': 2, 'arrayNumber': 316})
          },
          {
            name: "DRAW BLOOD",
            value: JSON.stringify({'cardId': 'vamp_draw_blood', 'embedType': 12345, 'arrayNumber': 317})
          },
          {
            name: "EXSANGUINATE!",
            value: JSON.stringify({'cardId': 'vamp_ult', 'embedType': 12, 'arrayNumber': 318})
          },
          {
            name: "GASH",
            value: JSON.stringify({'cardId': 'vamp_gash', 'embedType': 12345, 'arrayNumber': 319})
          },
          {
            name: "GLAMOUR",
            value: JSON.stringify({'cardId': 'vamp_glamour', 'embedType': 12345, 'arrayNumber': 320})
          },
          {
            name: "GOUGE",
            value: JSON.stringify({'cardId': 'vamp_gouge', 'embedType': 12346, 'arrayNumber': 321})
          },
          {
            name: "HEMORRHAGE",
            value: JSON.stringify({'cardId': 'vamp_hemorrage', 'embedType': 12345, 'arrayNumber': 322})
          },
          {
            name: "IMMORTAL FLESH",
            value: JSON.stringify({'cardId': 'vamp_immortal_flesh', 'embedType': 1234, 'arrayNumber': 323})
          },
          {
            name: "INFLUENCE",
            value: JSON.stringify({'cardId': 'vamp_influence', 'embedType': 12345, 'arrayNumber': 324})
          },
          {
            name: "LIMB FROM LIMB!",
            value: JSON.stringify({'cardId': 'vamp32', 'embedType': 12, 'arrayNumber': 325})
          },
          {
            name: "POSSESS",
            value: JSON.stringify({'cardId': 'vamp_possess', 'embedType': 12345, 'arrayNumber': 326})
          },
          {
            name: "PRESENCE",
            value: JSON.stringify({'cardId': 'vamp_presence', 'embedType': 12345, 'arrayNumber': 327})
          },
          {
            name: "REND",
            value: JSON.stringify({'cardId': 'vamp_rend', 'embedType': 1234, 'arrayNumber': 328})
          },
          {
            name: "SANGUIMANCY",
            value: JSON.stringify({'cardId': 'vamp_sanguimancy', 'embedType': 12345, 'arrayNumber': 329})
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