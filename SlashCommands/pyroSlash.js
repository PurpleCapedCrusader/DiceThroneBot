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
            value: JSON.stringify({'cardId': 'pyro_blazing_soul', 'embedType': 12345, 'arrayNumber': 197})
          },
          {
            name: "BURNING SOUL",
            value: JSON.stringify({'cardId': 'pyro_burning_soul', 'embedType': 1234, 'arrayNumber': 198})
          },
          {
            name: "COMBUSTION",
            value: JSON.stringify({'cardId': 'pyro_combustion', 'embedType': 1234, 'arrayNumber': 199})
          },
          {
            name: "FIRE UP!",
            value: JSON.stringify({'cardId': 'pyro30', 'embedType': 2, 'arrayNumber': 200})
          },
          {
            name: "FIREBALL",
            value: JSON.stringify({'cardId': 'pyro_fireball', 'embedType': 1234, 'arrayNumber': 201})
          },
          {
            name: "HOT STREAK",
            value: JSON.stringify({'cardId': 'pyro_hot_streak', 'embedType': 12345, 'arrayNumber': 202})
          },
          {
            name: "HUZZAH!",
            value: JSON.stringify({'cardId': 'pyro32', 'embedType': 12, 'arrayNumber': 203})
          },
          {
            name: "IGNITE",
            value: JSON.stringify({'cardId': 'pyro_ignite', 'embedType': 12345, 'arrayNumber': 204})
          },
          {
            name: "INFERNAL INFUSION!",
            value: JSON.stringify({'cardId': 'pyro33', 'embedType': 2, 'arrayNumber': 205})
          },
          {
            name: "METEORITE",
            value: JSON.stringify({'cardId': 'pyro_meteorite', 'embedType': 12345, 'arrayNumber': 206})
          },
          {
            name: "METEOROID",
            value: JSON.stringify({'cardId': 'pyro_meteoroid', 'embedType': 12345, 'arrayNumber': 207})
          },
          {
            name: "MOLTEN ARMOR",
            value: JSON.stringify({'cardId': 'pyro_molten_armor', 'embedType': 12346, 'arrayNumber': 208})
          },
          {
            name: "PYROBLAST",
            value: JSON.stringify({'cardId': 'pyro_pyroblast', 'embedType': 12346, 'arrayNumber': 209})
          },
          {
            name: "RED HOT!",
            value: JSON.stringify({'cardId': 'pyro31', 'embedType': 12, 'arrayNumber': 210})
          },
          {
            name: "SCORCH",
            value: JSON.stringify({'cardId': 'pyro_scorch', 'embedType': 12345, 'arrayNumber': 211})
          },
          {
            name: "SCORCH THE EARTH!",
            value: JSON.stringify({'cardId': 'pyro_ult', 'embedType': 12, 'arrayNumber': 212})
          },
          {
            name: "WARM UP!",
            value: JSON.stringify({'cardId': 'pyro29', 'embedType': 2, 'arrayNumber': 213})
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