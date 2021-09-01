const { Client, CommandInteraction } = require('discord.js');
const embedCreate = require("../events/embedCreate.js");


module.exports = {
    name: 'cursedpirate_cards_m_thru_z',
    description: 'Cursed Pirate cards M thru Z',
    options: [{
        name: 'select_card',
        type: 'STRING',
        description: 'choose a card',
        required: true,
        choices: [
          {
            name: "PILLAGE!",
            value: JSON.stringify({'cardId': 'curs26', 'embedType': 2, 'arrayNumber': 71})
          },
          {
            name: "PIRATE'S LIFE!",
            value: JSON.stringify({'cardId': 'curs22', 'embedType': 2, 'arrayNumber': 72})
          },
          {
            name: "PIRATE'S TOUCH!",
            value: JSON.stringify({'cardId': 'curs_ult_human', 'embedType': 12, 'arrayNumber': 73})
          },
          {
            name: "RANSOM!",
            value: JSON.stringify({'cardId': 'curs29', 'embedType': 2, 'arrayNumber': 74})
          },
          {
            name: "RUN YA THROUGH!",
            value: JSON.stringify({'cardId': 'curs30', 'embedType': 12, 'arrayNumber': 75})
          },
          {
            name: "SCURVY!",
            value: JSON.stringify({'cardId': 'curs27', 'embedType': 2, 'arrayNumber': 76})
          },
          {
            name: "SHARK BAIT!",
            value: JSON.stringify({'cardId': 'curs31', 'embedType': 12, 'arrayNumber': 77})
          },
          {
            name: "SHIVER ME TIMBERS",
            value: JSON.stringify({'cardId': 'curs_shiver_me_timbers', 'embedType': 12, 'arrayNumber': 78})
          },
          {
            name: "SOUL CUTLASS",
            value: JSON.stringify({'cardId': 'curs_soul_cutlass', 'embedType': 12, 'arrayNumber': 79})
          },
          {
            name: "SWASHBUCKLE!",
            value: JSON.stringify({'cardId': 'curs28', 'embedType': 2, 'arrayNumber': 80})
          },
          {
            name: "THAR SHE BLOWS!",
            value: JSON.stringify({'cardId': 'curs_thar_she_blows', 'embedType': 12, 'arrayNumber': 81})
          },
          {
            name: "THE SHIVERING",
            value: JSON.stringify({'cardId': 'curs_the_shivering', 'embedType': 12, 'arrayNumber': 82})
          },
          {
            name: "TRUCE!",
            value: JSON.stringify({'cardId': 'curs25', 'embedType': 2, 'arrayNumber': 83})
          },
          {
            name: "WALK THE PLANK",
            value: JSON.stringify({'cardId': 'curs_walk_the_plank', 'embedType': 12, 'arrayNumber': 84})
          },
          {
            name: "X MARKS THE SPOT",
            value: JSON.stringify({'cardId': 'curs_x_marks_the_spot', 'embedType': 12, 'arrayNumber': 85})
          },
          {
            name: "YO HO!",
            value: JSON.stringify({'cardId': 'curs19', 'embedType': 2, 'arrayNumber': 86})
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