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
            value: JSON.stringify({'cardId': 'arti27', 'embedType': 2, 'arrayNumber': 18})
          },
          {
            name: "CONDUCTIVITY!",
            value: JSON.stringify({'cardId': 'arti31', 'embedType': 2, 'arrayNumber': 19})
          },
          {
            name: "EUREKA",
            value: JSON.stringify({'cardId': 'arti_eureka', 'embedType': 12345, 'arrayNumber': 20})
          },
          {
            name: "HIGH VOLTAGE!",
            value: JSON.stringify({'cardId': 'arti29', 'embedType': 2, 'arrayNumber': 21})
          },
          {
            name: "JOLT",
            value: JSON.stringify({'cardId': 'arti_jolt', 'embedType': 12345, 'arrayNumber': 22})
          },
          {
            name: "MAXIMUM POWER!",
            value: JSON.stringify({'cardId': 'arti_ult', 'embedType': 12, 'arrayNumber': 23})
          },
          {
            name: "NANITE ASSAULT!",
            value: JSON.stringify({'cardId': 'arti30', 'embedType': 2, 'arrayNumber': 24})
          },
          {
            name: "NUTS N' BOLTS",
            value: JSON.stringify({'cardId': 'arti_nuts_n_bolts', 'embedType': 12345, 'arrayNumber': 25})
          },
          {
            name: "OOOH SHINY!",
            value: JSON.stringify({'cardId': 'arti32', 'embedType': 2, 'arrayNumber': 26})
          },
          {
            name: "OVERCLOCK",
            value: JSON.stringify({'cardId': 'arti_overclock', 'embedType': 12345, 'arrayNumber': 27})
          },
          {
            name: "POWER UP",
            value: JSON.stringify({'cardId': 'arti_power_up', 'embedType': 12345, 'arrayNumber': 28})
          },
          {
            name: "RATCHET UP",
            value: JSON.stringify({'cardId': 'arti_ratchet_up', 'embedType': 1234, 'arrayNumber': 29})
          },
          {
            name: "ROBO REVENGE!",
            value: JSON.stringify({'cardId': 'arti28', 'embedType': 2, 'arrayNumber': 30})
          },
          {
            name: "SCHEMATICS",
            value: JSON.stringify({'cardId': 'arti_schematics', 'embedType': 1234, 'arrayNumber': 31})
          },
          {
            name: "SCRAP COLLECTOR",
            value: JSON.stringify({'cardId': 'arti_scrap_collector', 'embedType': 1234, 'arrayNumber': 32})
          },
          {
            name: "SCRATCH BUILT",
            value: JSON.stringify({'cardId': 'arti_scratch_built', 'embedType': 12345, 'arrayNumber': 33})
          },
          {
            name: "SPANNER STRIKE",
            value: JSON.stringify({'cardId': 'arti_spanner_strike', 'embedType': 1234, 'arrayNumber': 34})
          },
          {
            name: "SWARMING BOTS",
            value: JSON.stringify({'cardId': 'arti_swarming_bots', 'embedType': 12345, 'arrayNumber': 35})
          },
          {
            name: "SYNTHESIZE!",
            value: JSON.stringify({'cardId': 'arti33', 'embedType': 2, 'arrayNumber': 36})
          },
          {
            name: "ZAPPPP!",
            value: JSON.stringify({'cardId': 'arti_zapppp', 'embedType': 12345, 'arrayNumber': 37})
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