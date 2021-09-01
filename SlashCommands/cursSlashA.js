const { Client, CommandInteraction } = require('discord.js');
const embedCreate = require("../events/embedCreate.js");


module.exports = {
    name: 'cursedpirate_cards_a_thru_l',
    description: 'Cursed Pirate cards A thru L',
    options: [{
        name: 'select_card',
        type: 'STRING',
        description: 'choose a card',
        required: true,
        choices: [
          {
            name: "ABYSSAL WALK",
            value: JSON.stringify({'cardId': 'curs_abyssal_walk', 'embedType': 12, 'arrayNumber': 54})
          },
          {
            name: "AHOY MATEY",
            value: JSON.stringify({'cardId': 'curs_ahoy_matey', 'embedType': 12, 'arrayNumber': 55})
          },
          {
            name: "AVAST YE",
            value: JSON.stringify({'cardId': 'curs_avast_ye', 'embedType': 12, 'arrayNumber': 56})
          },
          {
            name: "BATTEN DOWN!",
            value: JSON.stringify({'cardId': 'curs32', 'embedType': 2, 'arrayNumber': 57})
          },
          {
            name: "BLACK SOUL",
            value: JSON.stringify({'cardId': 'curs_black_soul', 'embedType': 12, 'arrayNumber': 58})
          },
          {
            name: "BLACK SPOT",
            value: JSON.stringify({'cardId': 'curs_black_spot', 'embedType': 12, 'arrayNumber': 59})
          },
          {
            name: "CROW'S NEST!",
            value: JSON.stringify({'cardId': 'curs24', 'embedType': 2, 'arrayNumber': 60})
          },
          {
            name: "CURSED",
            value: JSON.stringify({'cardId': 'curs_cursed', 'embedType': 12, 'arrayNumber': 61})
          },
          {
            name: "CURSED CARDS!",
            value: JSON.stringify({'cardId': 'curs33', 'embedType': 2, 'arrayNumber': 62})
          },
          {
            name: "CURSED TOUCH!",
            value: JSON.stringify({'cardId': 'curs_ult_cursed', 'embedType': 12, 'arrayNumber': 63})
          },
          {
            name: "CUTLASS STRIKE",
            value: JSON.stringify({'cardId': 'curs_cutlass_strike', 'embedType': 12, 'arrayNumber': 64})
          },
          {
            name: "DREAD MARK",
            value: JSON.stringify({'cardId': 'curs_dread_mark', 'embedType': 12, 'arrayNumber': 65})
          },
          {
            name: "FEED THE FISH!",
            value: JSON.stringify({'cardId': 'curs21', 'embedType': 2, 'arrayNumber': 66})
          },
          {
            name: "HEAVE-HO!",
            value: JSON.stringify({'cardId': 'curs34', 'embedType': 2, 'arrayNumber': 67})
          },
          {
            name: "HIGH STAKES!",
            value: JSON.stringify({'cardId': 'curs23', 'embedType': 2, 'arrayNumber': 68})
          },
          {
            name: "LIGHT IT UP!",
            value: JSON.stringify({'cardId': 'curs20', 'embedType': 2, 'arrayNumber': 69})
          },
          {
            name: "LIGHT THE FUSE",
            value: JSON.stringify({'cardId': 'curs_light_the_fuse', 'embedType': 12, 'arrayNumber': 70})
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
