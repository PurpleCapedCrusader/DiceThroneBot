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
            value: "abyssal_walk"
          },
          {
            name: "AHOY MATEY",
            value: "ahoy_matey"
          },
          {
            name: "AVAST YE",
            value: "avast_ye"
          },
          {
            name: "BATTEN DOWN!",
            value: "batten_down"
          },
          {
            name: "BLACK SOUL",
            value: "black_soul"
          },
          {
            name: "BLACK SPOT",
            value: "black_spot"
          },
          {
            name: "CROW'S NEST!",
            value: "crows_nest"
          },
          {
            name: "CURSED",
            value: "cursed"
          },
          {
            name: "CURSED CARDS!",
            value: "cursed_cards"
          },
          {
            name: "CURSED TOUCH!",
            value: "cursed_touch"
          },
          {
            name: "CUTLASS STRIKE",
            value: "cutlass_strike"
          },
          {
            name: "DREAD MARK",
            value: "dread_mark"
          },
          {
            name: "FEED THE FISH!",
            value: "feed_the_fish"
          },
          {
            name: "HEAVE-HO!",
            value: "heaveho"
          },
          {
            name: "HIGH STAKES!",
            value: "high_stakes"
          },
          {
            name: "LIGHT IT UP!",
            value: "light_it_up"
          },
          {
            name: "LIGHT THE FUSE",
            value: "light_the_fuse"
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
