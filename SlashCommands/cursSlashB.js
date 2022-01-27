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
            value: "pillage"
          },
          {
            name: "PIRATE'S LIFE!",
            value: "pirates_life"
          },
          {
            name: "PIRATE'S TOUCH!",
            value: "pirates_touch"
          },
          {
            name: "RANSOM!",
            value: "ransom"
          },
          {
            name: "RUN YA THROUGH!",
            value: "run_ya_through"
          },
          {
            name: "SCURVY!",
            value: "scurvy"
          },
          {
            name: "SHARK BAIT!",
            value: "shark_bait"
          },
          {
            name: "SHIVER ME TIMBERS",
            value: "shiver_me_timbers"
          },
          {
            name: "SOUL CUTLASS",
            value: "soul_cutlass"
          },
          {
            name: "SWASHBUCKLE!",
            value: "swashbuckle"
          },
          {
            name: "THAR SHE BLOWS!",
            value: "thar_she_blows"
          },
          {
            name: "THE SHIVERING",
            value: "the_shivering"
          },
          {
            name: "TRUCE!",
            value: "truce"
          },
          {
            name: "WALK THE PLANK",
            value: "walk_the_plank"
          },
          {
            name: "X MARKS THE SPOT",
            value: "x_marks_the_spot"
          },
          {
            name: "YO HO!",
            value: "yo_ho"
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