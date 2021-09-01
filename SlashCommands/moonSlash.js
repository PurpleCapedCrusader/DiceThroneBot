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
            value: JSON.stringify({'cardId': 'moon_blinding_shot', 'embedType': 12345, 'arrayNumber': 141})
          },
          {
            name: "COVERED SHOT",
            value: JSON.stringify({'cardId': 'moon_covered_shot', 'embedType': 12345, 'arrayNumber': 142})
          },
          {
            name: "DEMISING SHOT",
            value: JSON.stringify({'cardId': 'moon_demising_shot', 'embedType': 12345, 'arrayNumber': 143})
          },
          {
            name: "ECLIPSE",
            value: JSON.stringify({'cardId': 'moon_eclipse', 'embedType': 12345, 'arrayNumber': 144})
          },
          {
            name: "ENTANGLING SHOT",
            value: JSON.stringify({'cardId': 'moon_entangling_shot', 'embedType': 1234, 'arrayNumber': 145})
          },
          {
            name: "EVADE!",
            value: JSON.stringify({'cardId': 'moon32', 'embedType': 2, 'arrayNumber': 146})
          },
          {
            name: "EVASIVE ACTION",
            value: JSON.stringify({'cardId': 'moon_evasive_action', 'embedType': 12345, 'arrayNumber': 147})
          },
          {
            name: "EXPLODING ARROW",
            value: JSON.stringify({'cardId': 'moon_exploding_arrow', 'embedType': 12346, 'arrayNumber': 148})
          },
          {
            name: "FOCUS",
            value: JSON.stringify({'cardId': 'moon_focus', 'embedType': 12345, 'arrayNumber': 149})
          },
          {
            name: "LONGBOW",
            value: JSON.stringify({'cardId': 'moon_longbow', 'embedType': 1346, 'arrayNumber': 150})
          },
          {
            name: "LUNAR BLESSING",
            value: JSON.stringify({'cardId': 'moon_lunar_blessing', 'embedType': 12345, 'arrayNumber': 151})
          },
          {
            name: "LUNAR ECLIPSE!",
            value: JSON.stringify({'cardId': 'moon_ult', 'embedType': 12, 'arrayNumber': 152})
          },
          {
            name: "LUNAR UMBRA!",
            value: JSON.stringify({'cardId': 'moon33', 'embedType': 2, 'arrayNumber': 153})
          },
          {
            name: "MISSED ME",
            value: JSON.stringify({'cardId': 'moon_missed_me', 'embedType': 1234, 'arrayNumber': 154})
          },
          {
            name: "MOON MAGIC!",
            value: JSON.stringify({'cardId': 'moon29', 'embedType': 2, 'arrayNumber': 155})
          },
          {
            name: "MOON SHADOW",
            value: JSON.stringify({'cardId': 'moon_moon_shadow', 'embedType': 12345, 'arrayNumber': 156})
          },
          {
            name: "TAKE THAT!",
            value: JSON.stringify({'cardId': 'moon30', 'embedType': 12, 'arrayNumber': 157})
          },
          {
            name: "VOLLEY!",
            value: JSON.stringify({'cardId': 'moon31', 'embedType': 12, 'arrayNumber': 158})
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