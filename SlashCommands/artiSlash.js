const { Client, CommandInteraction } = require('discord.js');
const embedCreate = require("../events/embedCreate.js");


module.exports = {
    name: 'artificer_cards',
    description: 'Artificer cards',
    options: [{
        name: 'select_card',
        type: 'STRING',
        description: 'choose a card',
        required: true,
        choices: [
          {
            name: "ARCING SHIELD",
            value: "arcing_shield"
          },
          {
            name: "CONDUCTIVITY!",
            value: "conductivity"
          },
          {
            name: "EUREKA",
            value: "eureka"
          },
          {
            name: "HIGH VOLTAGE!",
            value: "high_voltage"
          },
          {
            name: "JOLT",
            value: "jolt"
          },
          {
            name: "MAXIMUM POWER!",
            value: "maximum_power"
          },
          {
            name: "NANITE ASSAULT!",
            value: "nanite_assault"
          },
          {
            name: "NUTS N' BOLTS",
            value: "nuts_n_bolts"
          },
          {
            name: "OOOH SHINY!",
            value: "oooh_shiny"
          },
          {
            name: "OVERCLOCK",
            value: "overclock"
          },
          {
            name: "POWER UP",
            value: "power_up"
          },
          {
            name: "RATCHET UP",
            value: "ratchet_up"
          },
          {
            name: "ROBO REVENGE!",
            value: "robo_revenge"
          },
          {
            name: "SCHEMATICS",
            value: "schematics"
          },
          {
            name: "SCRAP COLLECTOR",
            value: "scrap_collector"
          },
          {
            name: "SCRATCH BUILT",
            value: "scratch_built"
          },
          {
            name: "SPANNER STRIKE",
            value: "spanner_strike"
          },
          {
            name: "SWARMING BOTS",
            value: "swarming_bots"
          },
          {
            name: "SYNTHESIZE!",
            value: "synthesize"
          },
          {
            name: "ZAPPPP!",
            value: "zapppp"
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