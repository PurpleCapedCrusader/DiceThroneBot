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
            value: JSON.stringify({'card': 'arti27', 'embed_type': 1, 'array_number': 19})
          },
          {
            name: "CONDUCTIVITY!",
            value: JSON.stringify({'card': 'arti31', 'embed_type': 1, 'array_number': 20})
          },
          {
            name: "EUREKA",
            value: JSON.stringify({'card': 'arti_eureka', 'embed_type': 123, 'array_number': 21})
          },
          {
            name: "HIGH VOLTAGE!",
            value: JSON.stringify({'card': 'arti29', 'embed_type': 1, 'array_number': 22})
          },
          {
            name: "JOLT",
            value: JSON.stringify({'card': 'arti_jolt', 'embed_type': 123, 'array_number': 23})
          },
          {
            name: "MAXIMUM POWER!",
            value: JSON.stringify({'card': 'arti_ult', 'embed_type': 1, 'array_number': 24})
          },
          {
            name: "NANITE ASSAULT!",
            value: JSON.stringify({'card': 'arti30', 'embed_type': 1, 'array_number': 25})
          },
          {
            name: "NUTS N' BOLTS",
            value: JSON.stringify({'card': 'arti_nuts_n_bolts', 'embed_type': 23, 'array_number': 26})
          },
          {
            name: "OOOH SHINY!",
            value: JSON.stringify({'card': 'arti32', 'embed_type': 1, 'array_number': 27})
          },
          {
            name: "OVERCLOCK",
            value: JSON.stringify({'card': 'arti_overclock', 'embed_type': 123, 'array_number': 28})
          },
          {
            name: "POWER UP",
            value: JSON.stringify({'card': 'arti_power_up', 'embed_type': 23, 'array_number': 29})
          },
          {
            name: "RATCHET UP",
            value: JSON.stringify({'card': 'arti_ratchet_up', 'embed_type': 12, 'array_number': 30})
          },
          {
            name: "ROBO REVENGE!",
            value: JSON.stringify({'card': 'arti28', 'embed_type': 1, 'array_number': 31})
          },
          {
            name: "SCHEMATICS",
            value: JSON.stringify({'card': 'arti_schematics', 'embed_type': 12, 'array_number': 32})
          },
          {
            name: "SCRAP COLLECTOR",
            value: JSON.stringify({'card': 'arti_scrap_collector', 'embed_type': 12, 'array_number': 33})
          },
          {
            name: "SCRATCH BUILT",
            value: JSON.stringify({'card': 'arti_scratch_built', 'embed_type': 23, 'array_number': 34})
          },
          {
            name: "SPANNER STRIKE",
            value: JSON.stringify({'card': 'arti_spanner_strike', 'embed_type': 12, 'array_number': 35})
          },
          {
            name: "SWARMING BOTS",
            value: JSON.stringify({'card': 'arti_swarming_bots', 'embed_type': 23, 'array_number': 36})
          },
          {
            name: "SYNTHESIZE!",
            value: JSON.stringify({'card': 'arti33', 'embed_type': 1, 'array_number': 37})
          },
          {
            name: "ZAPPPP!",
            value: JSON.stringify({'card': 'arti_zapppp', 'embed_type': 123, 'array_number': 38})
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