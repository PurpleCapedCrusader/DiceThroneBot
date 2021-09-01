const { Client, CommandInteraction } = require('discord.js');
const embedCreate = require("../events/embedCreate.js");


module.exports = {
    name: 'gunslinger_cards',
    description: 'Gunslinger cards',
    options: [{
        name: 'select_card',
        type: 'STRING',
        description: 'choose a card',
        required: true,
        choices: [
          {
            name: "BOUNTY HUNTER",
            value: JSON.stringify({'cardId': 'guns_bounty_hunter', 'embedType': 1234, 'arrayNumber': 87})
          },
          {
            name: "DEADEYE",
            value: JSON.stringify({'cardId': 'guns_deadeye', 'embedType': 12345, 'arrayNumber': 88})
          },
          {
            name: "DUEL",
            value: JSON.stringify({'cardId': 'guns_duel', 'embedType': 1234, 'arrayNumber': 89})
          },
          {
            name: "EAT LEAD!",
            value: JSON.stringify({'cardId': 'guns32', 'embedType': 12, 'arrayNumber': 90})
          },
          {
            name: "ENFORCER",
            value: JSON.stringify({'cardId': 'guns_enforcer', 'embedType': 12345, 'arrayNumber': 91})
          },
          {
            name: "FAN THE HAMMER",
            value: JSON.stringify({'cardId': 'guns_fan_the_hammer', 'embedType': 12345, 'arrayNumber': 92})
          },
          {
            name: "FILL'EM WITH LEAD!",
            value: JSON.stringify({'cardId': 'guns_ult', 'embedType': 12, 'arrayNumber': 93})
          },
          {
            name: "MARK THE TARGET",
            value: JSON.stringify({'cardId': 'guns_mark_the_target', 'embedType': 12345, 'arrayNumber': 94})
          },
          {
            name: "PISTOL WHIP",
            value: JSON.stringify({'cardId': 'guns_pistol_whip', 'embedType': 12345, 'arrayNumber': 95})
          },
          {
            name: "QUICK DRAW",
            value: JSON.stringify({'cardId': 'guns_quick_draw', 'embedType': 1234, 'arrayNumber': 96})
          },
          {
            name: "REVOLVER",
            value: JSON.stringify({'cardId': 'guns_revolver', 'embedType': 134, 'arrayNumber': 97})
          },
          {
            name: "ROULETTE!",
            value: JSON.stringify({'cardId': 'guns30', 'embedType': 2, 'arrayNumber': 98})
          },
          {
            name: "RUN AND GUN!",
            value: JSON.stringify({'cardId': 'guns33', 'embedType': 2, 'arrayNumber': 99})
          },
          {
            name: "SHOWDOWN",
            value: JSON.stringify({'cardId': 'guns_showdown', 'embedType': 12346, 'arrayNumber': 100})
          },
          {
            name: "SPIN THE CHAMBER!",
            value: JSON.stringify({'cardId': 'guns29', 'embedType': 2, 'arrayNumber': 101})
          },
          {
            name: "TAKE COVER",
            value: JSON.stringify({'cardId': 'guns_take_cover', 'embedType': 12345, 'arrayNumber': 102})
          },
          {
            name: "WANTED!",
            value: JSON.stringify({'cardId': 'guns28', 'embedType': 2, 'arrayNumber': 103})
          },
          {
            name: "WILD WEST!",
            value: JSON.stringify({'cardId': 'guns31', 'embedType': 12, 'arrayNumber': 104})
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