const { Client, CommandInteraction } = require("discord.js");
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
            value: "better_d"
          },
          {
            name: "BUH, BYE!",
            value: "buh_bye"
          },
          {
            name: "DOUBLE UP!",
            value: "double_up"
          },
          {
            name: "GET THAT OUTTA HERE!",
            value: "get_that_outta_here"
          },
          {
            name: "GETTING PAID!",
            value: "getting_paid"
          },
          {
            name: "HELPING HAND!",
            value: "helping_hand"
          },
          {
            name: "NOT THIS TIME!",
            value: "not_this_time"
          },
          {
            name: "ONE MORE TIME!",
            value: "one_more_time"
          },
          {
            name: "SAMESIES!",
            value: "samesies"
          },
          {
            name: "SIX-IT!",
            value: "sixit"
          },
          {
            name: "SO WILD!",
            value: "so_wild"
          },
          {
            name: "TIP IT!",
            value: "tip_it"
          },
          {
            name: "TRANSFERENCE!",
            value: "transference"
          },
          {
            name: "TRIPLE UP!",
            value: "triple_up"
          },
          {
            name: "TRY, TRY AGAIN!",
            value: "try_try_again"
          },
          {
            name: "TWICE AS WILD!",
            value: "twice_as_wild"
          },
          {
            name: "VEGAS BABY!",
            value: "vegas_baby"
          },
          {
            name: "WHAT STATUS EFFECTS?",
            value: "what_status_effects"
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