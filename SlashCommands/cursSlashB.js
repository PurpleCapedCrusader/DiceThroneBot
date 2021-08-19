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
            value: JSON.stringify({'card': 'curs26', 'embed_type': 1, 'array_number': 72})
          },
          {
            name: "PIRATE'S LIFE!",
            value: JSON.stringify({'card': 'curs22', 'embed_type': 1, 'array_number': 73})
          },
          {
            name: "PIRATE'S TOUCH!",
            value: JSON.stringify({'card': 'curs_pirates_touch', 'embed_type': 1, 'array_number': 74})
          },
          {
            name: "RANSOM!",
            value: JSON.stringify({'card': 'curs29', 'embed_type': 1, 'array_number': 75})
          },
          {
            name: "RUN YA THROUGH!",
            value: JSON.stringify({'card': 'curs30', 'embed_type': 1, 'array_number': 76})
          },
          {
            name: "SCURVY!",
            value: JSON.stringify({'card': 'curs27', 'embed_type': 1, 'array_number': 77})
          },
          {
            name: "SHARK BAIT!",
            value: JSON.stringify({'card': 'curs31', 'embed_type': 1, 'array_number': 78})
          },
          {
            name: "SHIVER ME TIMBERS",
            value: JSON.stringify({'card': 'curs_shiver_me_timbers', 'embed_type': 1, 'array_number': 79})
          },
          {
            name: "SOUL CUTLASS",
            value: JSON.stringify({'card': 'curs_soul_cutlass', 'embed_type': 1, 'array_number': 80})
          },
          {
            name: "SWASHBUCKLE!",
            value: JSON.stringify({'card': 'curs28', 'embed_type': 1, 'array_number': 81})
          },
          {
            name: "THAR SHE BLOWS",
            value: JSON.stringify({'card': 'curs_thar_she_blows', 'embed_type': 1, 'array_number': 82})
          },
          {
            name: "THE SHIVERING",
            value: JSON.stringify({'card': 'curs_the_shivering', 'embed_type': 1, 'array_number': 83})
          },
          {
            name: "TRUCE!",
            value: JSON.stringify({'card': 'curs25', 'embed_type': 1, 'array_number': 84})
          },
          {
            name: "WALK THE PLANK",
            value: JSON.stringify({'card': 'curs_walk_the_plank', 'embed_type': 1, 'array_number': 85})
          },
          {
            name: "X MARKS THE SPOT",
            value: JSON.stringify({'card': 'curs_x_marks_the_spot', 'embed_type': 1, 'array_number': 86})
          },
          {
            name: "YO HO!",
            value: JSON.stringify({'card': 'curs19', 'embed_type': 1, 'array_number': 87})
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