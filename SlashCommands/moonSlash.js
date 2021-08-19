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
            value: JSON.stringify({'card': 'moon_blinding_shot', 'embed_type': 123, 'array_number': 142})
          },
          {
            name: "COVERED SHOT",
            value: JSON.stringify({'card': 'moon_covered_shot', 'embed_type': 123, 'array_number': 143})
          },
          {
            name: "DEMISING SHOT",
            value: JSON.stringify({'card': 'moon_demising_shot', 'embed_type': 123, 'array_number': 144})
          },
          {
            name: "ECLIPSE",
            value: JSON.stringify({'card': 'moon_eclipse', 'embed_type': 123, 'array_number': 145})
          },
          {
            name: "ENTANGLING SHOT",
            value: JSON.stringify({'card': 'moon_entangling_shot', 'embed_type': 12, 'array_number': 146})
          },
          {
            name: "EVADE!",
            value: JSON.stringify({'card': 'moon32', 'embed_type': 1, 'array_number': 147})
          },
          {
            name: "EVASIVE ACTION",
            value: JSON.stringify({'card': 'moon_evasive_action', 'embed_type': 23, 'array_number': 148})
          },
          {
            name: "EXPLODING ARROW",
            value: JSON.stringify({'card': 'moon_exploding_arrow', 'embed_type': 124, 'array_number': 149})
          },
          {
            name: "FOCUS",
            value: JSON.stringify({'card': 'moon_focus', 'embed_type': 23, 'array_number': 150})
          },
          {
            name: "LONGBOW",
            value: JSON.stringify({'card': 'moon_longbow', 'embed_type': 124, 'array_number': 151})
          },
          {
            name: "LUNAR BLESSING",
            value: JSON.stringify({'card': 'moon_lunar_blessing', 'embed_type': 23, 'array_number': 152})
          },
          {
            name: "LUNAR ECLIPSE!",
            value: JSON.stringify({'card': 'moon_ult', 'embed_type': 1, 'array_number': 153})
          },
          {
            name: "LUNAR UMBRA!",
            value: JSON.stringify({'card': 'moon33', 'embed_type': 1, 'array_number': 154})
          },
          {
            name: "MISSED ME",
            value: JSON.stringify({'card': 'moon_missed_me', 'embed_type': 12, 'array_number': 155})
          },
          {
            name: "MOON MAGIC!",
            value: JSON.stringify({'card': 'moon29', 'embed_type': 1, 'array_number': 156})
          },
          {
            name: "MOON SHADOW",
            value: JSON.stringify({'card': 'moon_moon_shadow', 'embed_type': 23, 'array_number': 157})
          },
          {
            name: "TAKE THAT!",
            value: JSON.stringify({'card': 'moon30', 'embed_type': 1, 'array_number': 158})
          },
          {
            name: "VOLLEY!",
            value: JSON.stringify({'card': 'moon31', 'embed_type': 1, 'array_number': 159})
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