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
            value: JSON.stringify({'card': 'guns_bounty_hunter', 'embed_type': 12, 'array_number': 88})
          },
          {
            name: "DEADEYE",
            value: JSON.stringify({'card': 'guns_deadeye', 'embed_type': 123, 'array_number': 89})
          },
          {
            name: "DUEL",
            value: JSON.stringify({'card': 'guns_duel', 'embed_type': 12, 'array_number': 90})
          },
          {
            name: "EAT LEAD!",
            value: JSON.stringify({'card': 'guns32', 'embed_type': 1, 'array_number': 91})
          },
          {
            name: "ENFORCER",
            value: JSON.stringify({'card': 'guns_enforcer', 'embed_type': 23, 'array_number': 92})
          },
          {
            name: "FAN THE HAMMER",
            value: JSON.stringify({'card': 'guns_fan_the_hammer', 'embed_type': 123, 'array_number': 93})
          },
          {
            name: "FILL'EM WITH LEAD!",
            value: JSON.stringify({'card': 'guns_ult', 'embed_type': 1, 'array_number': 94})
          },
          {
            name: "MARK THE TARGET",
            value: JSON.stringify({'card': 'guns_mark_the_target', 'embed_type': 23, 'array_number': 95})
          },
          {
            name: "PISTOL WHIP",
            value: JSON.stringify({'card': 'guns_pistol_whip', 'embed_type': 23, 'array_number': 96})
          },
          {
            name: "QUICK DRAW",
            value: JSON.stringify({'card': 'guns_quick_draw', 'embed_type': 12, 'array_number': 97})
          },
          {
            name: "REVOLVER",
            value: JSON.stringify({'card': 'guns_revolver', 'embed_type': 12, 'array_number': 98})
          },
          {
            name: "ROULETTE!",
            value: JSON.stringify({'card': 'guns30', 'embed_type': 1, 'array_number': 99})
          },
          {
            name: "RUN AND GUN!",
            value: JSON.stringify({'card': 'guns33', 'embed_type': 1, 'array_number': 100})
          },
          {
            name: "SHOWDOWN",
            value: JSON.stringify({'card': 'guns_showdown', 'embed_type': 124, 'array_number': 101})
          },
          {
            name: "SPIN THE CHAMBER!",
            value: JSON.stringify({'card': 'guns29', 'embed_type': 1, 'array_number': 102})
          },
          {
            name: "TAKE COVER",
            value: JSON.stringify({'card': 'guns_take_cover', 'embed_type': 123, 'array_number': 103})
          },
          {
            name: "WANTED!",
            value: JSON.stringify({'card': 'guns28', 'embed_type': 1, 'array_number': 104})
          },
          {
            name: "WILD WEST!",
            value: JSON.stringify({'card': 'guns31', 'embed_type': 1, 'array_number': 105})
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