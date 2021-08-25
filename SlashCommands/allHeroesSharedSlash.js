const { Client,CommandInteraction } = require("discord.js");
const embedCreate = require("../events/embedCreate.js");

module.exports = {
    name: "all_heroes",
    description: "Generic cards shared by all heroes",
    options: [{
        name: "select_card",
        type: "STRING",
        description: 'choose a card',
        required: true,
        choices: [
          {
            name: "BETTER D!",
            value: JSON.stringify({'cardId': 'basic_hero17', 'embedType': "basic", 'arrayNumber': 0})
          },
          {
            name: "BUH, BYE!",
            value: JSON.stringify({'cardId': 'basic_hero07', 'embedType': "basic", 'arrayNumber': 1})
          },
          {
            name: "DOUBLE UP!",
            value: JSON.stringify({'cardId': 'basic_hero06', 'embedType': "basic", 'arrayNumber': 2})
          },
          {
            name: "GET THAT OUTTA HERE!",
            value: JSON.stringify({'cardId': 'basic_hero04', 'embedType': "basic", 'arrayNumber': 3})
          },
          {
            name: "GETTING PAID!",
            value: JSON.stringify({'cardId': 'basic_hero09', 'embedType': "basic", 'arrayNumber': 4})
          },
          {
            name: "HELPING HAND!",
            value: JSON.stringify({'cardId': 'basic_hero16', 'embedType': "basic", 'arrayNumber': 5})
          },
          {
            name: "NOT THIS TIME!",
            value: JSON.stringify({'cardId': 'basic_hero10', 'embedType': "basic", 'arrayNumber': 6})
          },
          {
            name: "ONE MORE TIME!",
            value: JSON.stringify({'cardId': 'basic_hero15', 'embedType': "basic", 'arrayNumber': 7})
          },
          {
            name: "SAMESIES!",
            value: JSON.stringify({'cardId': 'basic_hero14', 'embedType': "basic", 'arrayNumber': 8})
          },
          {
            name: "SIX-IT!",
            value: JSON.stringify({'cardId': 'basic_hero18', 'embedType': "basic", 'arrayNumber': 9})
          },
          {
            name: "SO WILD!",
            value: JSON.stringify({'cardId': 'basic_hero13', 'embedType': "basic", 'arrayNumber': 10})
          },
          {
            name: "TIP IT!",
            value: JSON.stringify({'cardId': 'basic_hero08', 'embedType': "basic", 'arrayNumber': 11})
          },
          {
            name: "TRANSFERENCE!",
            value: JSON.stringify({'cardId': 'basic_hero01', 'embedType': "basic", 'arrayNumber': 12})
          },
          {
            name: "TRIPLE UP!",
            value: JSON.stringify({'cardId': 'basic_hero05', 'embedType': "basic", 'arrayNumber': 13})
          },
          {
            name: "TRY, TRY AGAIN!",
            value: JSON.stringify({'cardId': 'basic_hero12', 'embedType': "basic", 'arrayNumber': 14})
          },
          {
            name: "TWICE AS WILD!",
            value: JSON.stringify({'cardId': 'basic_hero11', 'embedType': "basic", 'arrayNumber': 15})
          },
          {
            name: "VEGAS BABY!",
            value: JSON.stringify({'cardId': 'basic_hero03', 'embedType': "basic", 'arrayNumber': 16})
          },
          {
            name: "WHAT STATUS EFFECTS?",
            value: JSON.stringify({'cardId': 'basic_hero02', 'embedType': "basic", 'arrayNumber': 17})
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