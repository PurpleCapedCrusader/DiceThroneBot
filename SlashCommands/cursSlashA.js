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
            value: JSON.stringify({'card': 'curs_abyssal_walk', 'embed_type': 1, 'array_number': 55})
          },
          {
            name: "AHOY MATEY",
            value: JSON.stringify({'card': 'curs_ahoy_matey', 'embed_type': 1, 'array_number': 56})
          },
          {
            name: "AVAST YE",
            value: JSON.stringify({'card': 'curs_avast_ye', 'embed_type': 1, 'array_number': 57})
          },
          {
            name: "BATTEN DOWN!",
            value: JSON.stringify({'card': 'curs32', 'embed_type': 1, 'array_number': 58})
          },
          {
            name: "BLACK SOUL",
            value: JSON.stringify({'card': 'curs_black_soul', 'embed_type': 1, 'array_number': 59})
          },
          {
            name: "BLACK SPOT",
            value: JSON.stringify({'card': 'curs_black_spot', 'embed_type': 1, 'array_number': 60})
          },
          {
            name: "CROW'S NEST!",
            value: JSON.stringify({'card': 'curs24', 'embed_type': 1, 'array_number': 61})
          },
          {
            name: "CURSED",
            value: JSON.stringify({'card': 'curs_cursed', 'embed_type': 1, 'array_number': 62})
          },
          {
            name: "CURSED CARDS!",
            value: JSON.stringify({'card': 'curs33', 'embed_type': 1, 'array_number': 63})
          },
          {
            name: "CURSED TOUCH!",
            value: JSON.stringify({'card': 'curs_cursed_touch', 'embed_type': 1, 'array_number': 64})
          },
          {
            name: "CUTLASS STRIKE",
            value: JSON.stringify({'card': 'curs_cutlass_strike', 'embed_type': 1, 'array_number': 65})
          },
          {
            name: "DREAD MARK",
            value: JSON.stringify({'card': 'curs_dread_mark', 'embed_type': 1, 'array_number': 66})
          },
          {
            name: "FEED THE FISH!",
            value: JSON.stringify({'card': 'curs21', 'embed_type': 1, 'array_number': 67})
          },
          {
            name: "HEAVE-HO!",
            value: JSON.stringify({'card': 'curs34', 'embed_type': 1, 'array_number': 68})
          },
          {
            name: "HIGH STAKES!",
            value: JSON.stringify({'card': 'curs23', 'embed_type': 1, 'array_number': 69})
          },
          {
            name: "LIGHT IT UP!",
            value: JSON.stringify({'card': 'curs20', 'embed_type': 1, 'array_number': 70})
          },
          {
            name: "LIGHT THE FUSE",
            value: JSON.stringify({'card': 'curs_light_the_fuse', 'embed_type': 1, 'array_number': 71})
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
