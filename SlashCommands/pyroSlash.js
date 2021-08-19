const { Client, CommandInteraction } = require('discord.js');
const embedCreate = require("../events/embedCreate.js");


module.exports = {
    name: 'pyromancer_cards',
    description: 'Pyromancer cards',
    options: [{
        name: 'select_card',
        type: 'STRING',
        description: 'choose a card',
        required: true,
        choices: [
          {
            name: "BLAZING SOUL",
            value: JSON.stringify({'card': 'pyro_blazing_soul', 'embed_type': 23, 'array_number': 198})
          },
          {
            name: "BURNING SOUL",
            value: JSON.stringify({'card': 'pyro_burning_soul', 'embed_type': 12, 'array_number': 199})
          },
          {
            name: "COMBUSTION",
            value: JSON.stringify({'card': 'pyro_combustion', 'embed_type': 12, 'array_number': 200})
          },
          {
            name: "FIRE UP!",
            value: JSON.stringify({'card': 'pyro30', 'embed_type': 1, 'array_number': 201})
          },
          {
            name: "FIREBALL",
            value: JSON.stringify({'card': 'pyro_fireball', 'embed_type': 12, 'array_number': 202})
          },
          {
            name: "HOT STREAK",
            value: JSON.stringify({'card': 'pyro_hot_streak', 'embed_type': 123, 'array_number': 203})
          },
          {
            name: "HUZZAH!",
            value: JSON.stringify({'card': 'pyro32', 'embed_type': 1, 'array_number': 204})
          },
          {
            name: "IGNITE",
            value: JSON.stringify({'card': 'pyro_ignite', 'embed_type': 123, 'array_number': 205})
          },
          {
            name: "INFERNAL INFUSION!",
            value: JSON.stringify({'card': 'pyro33', 'embed_type': 1, 'array_number': 206})
          },
          {
            name: "METEORITE",
            value: JSON.stringify({'card': 'pyro_meteorite', 'embed_type': 123, 'array_number': 207})
          },
          {
            name: "METEOROID",
            value: JSON.stringify({'card': 'pyro_meteoroid', 'embed_type': 23, 'array_number': 208})
          },
          {
            name: "MOLTEN ARMOR",
            value: JSON.stringify({'card': 'pyro_molten_armor', 'embed_type': 124, 'array_number': 209})
          },
          {
            name: "PYROBLAST",
            value: JSON.stringify({'card': 'pyro_pyroblast', 'embed_type': 124, 'array_number': 210})
          },
          {
            name: "RED HOT!",
            value: JSON.stringify({'card': 'pyro31', 'embed_type': 1, 'array_number': 211})
          },
          {
            name: "SCORCH",
            value: JSON.stringify({'card': 'pyro_scorch', 'embed_type': 23, 'array_number': 212})
          },
          {
            name: "SCORCH THE EARTH!",
            value: JSON.stringify({'card': 'pyro_ult', 'embed_type': 1, 'array_number': 213})
          },
          {
            name: "WARM UP!",
            value: JSON.stringify({'card': 'pyro29', 'embed_type': 1, 'array_number': 214})
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