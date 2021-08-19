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
            value: JSON.stringify({'card': 'vamp31', 'embed_type': 1, 'array_number': 310})
          },
          {
            name: "BLOOD FLOW!",
            value: JSON.stringify({'card': 'vamp33', 'embed_type': 1, 'array_number': 311})
          },
          {
            name: "BLOOD LETTING!",
            value: JSON.stringify({'card': 'vamp29', 'embed_type': 1, 'array_number': 312})
          },
          {
            name: "BLOOD MAGIC",
            value: JSON.stringify({'card': 'vamp_blood_magic', 'embed_type': 123, 'array_number': 313})
          },
          {
            name: "BLOOD THIRST",
            value: JSON.stringify({'card': 'vamp_blood_thirst', 'embed_type': 123, 'array_number': 314})
          },
          {
            name: "BLOOD TIDE!",
            value: JSON.stringify({'card': 'vamp34', 'embed_type': 1, 'array_number': 315})
          },
          {
            name: "CONSUME BLOOD!",
            value: JSON.stringify({'card': 'vamp28', 'embed_type': 1, 'array_number': 316})
          },
          {
            name: "DARK OMEN!",
            value: JSON.stringify({'card': 'vamp30', 'embed_type': 1, 'array_number': 317})
          },
          {
            name: "DRAW BLOOD",
            value: JSON.stringify({'card': 'vamp_draw_blood', 'embed_type': 23, 'array_number': 318})
          },
          {
            name: "EXSANGUINATE!",
            value: JSON.stringify({'card': 'vamp_ult', 'embed_type': 1, 'array_number': 319})
          },
          {
            name: "GASH",
            value: JSON.stringify({'card': 'vamp_gash', 'embed_type': 23, 'array_number': 320})
          },
          {
            name: "GLAMOUR",
            value: JSON.stringify({'card': 'vamp_glamour', 'embed_type': 123, 'array_number': 321})
          },
          {
            name: "GOUGE",
            value: JSON.stringify({'card': 'vamp_gouge', 'embed_type': 124, 'array_number': 322})
          },
          {
            name: "HEMORRHAGE",
            value: JSON.stringify({'card': 'vamp_hemorrage', 'embed_type': 23, 'array_number': 323})
          },
          {
            name: "IMMORTAL FLESH",
            value: JSON.stringify({'card': 'vamp_immortal_flesh', 'embed_type': 12, 'array_number': 324})
          },
          {
            name: "INFLUENCE",
            value: JSON.stringify({'card': 'vamp_influence', 'embed_type': 23, 'array_number': 325})
          },
          {
            name: "LIMB FROM LIMB!",
            value: JSON.stringify({'card': 'vamp32', 'embed_type': 1, 'array_number': 326})
          },
          {
            name: "POSSESS",
            value: JSON.stringify({'card': 'vamp_possess', 'embed_type': 123, 'array_number': 327})
          },
          {
            name: "PRESENCE",
            value: JSON.stringify({'card': 'vamp_presence', 'embed_type': 23, 'array_number': 328})
          },
          {
            name: "REND",
            value: JSON.stringify({'card': 'vamp_rend', 'embed_type': 12, 'array_number': 329})
          },
          {
            name: "SANGUIMANCY",
            value: JSON.stringify({'card': 'vamp_sanguimancy', 'embed_type': 123, 'array_number': 330})
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