const { Client, CommandInteraction } = require('discord.js');
const embedCreate = require("../events/embedCreate.js");


module.exports = {
    name: 'huntress_cards',
    description: 'Huntress cards',
    options: [{
        name: 'select_card',
        type: 'STRING',
        description: 'choose a card',
        required: true,
        choices: [
          {
            name: "ANIMALISTIC",
            value: JSON.stringify({'card': 'hunt_animalistic', 'embed_type': 12, 'array_number': 106})
          },
          {
            name: "BLOOD BOND!",
            value: JSON.stringify({'card': 'hunt28', 'embed_type': 1, 'array_number': 107})
          },
          {
            name: "FERAL",
            value: JSON.stringify({'card': 'hunt_feral', 'embed_type': 123, 'array_number': 108})
          },
          {
            name: "FERAL INSTINCTS",
            value: JSON.stringify({'card': 'hunt_feral_instincts', 'embed_type': 123, 'array_number': 109})
          },
          {
            name: "FEROCIOUS",
            value: JSON.stringify({'card': 'hunt_ferocious', 'embed_type': 23, 'array_number': 110})
          },
          {
            name: "HUNT",
            value: JSON.stringify({'card': 'hunt_hunt', 'embed_type': 23, 'array_number': 111})
          },
          {
            name: "JUGULAR",
            value: JSON.stringify({'card': 'hunt_jugular', 'embed_type': 23, 'array_number': 112})
          },
          {
            name: "JUNGLE FURY!",
            value: JSON.stringify({'card': 'hunt_ult', 'embed_type': 1, 'array_number': 113})
          },
          {
            name: "MATERNAL BOND",
            value: JSON.stringify({'card': 'hunt_maternal_bond', 'embed_type': 124, 'array_number': 114})
          },
          {
            name: "ONSLAUGHT",
            value: JSON.stringify({'card': 'hunt_onslaught', 'embed_type': 12, 'array_number': 115})
          },
          {
            name: "POUNCE!",
            value: JSON.stringify({'card': 'hunt30', 'embed_type': 1, 'array_number': 116})
          },
          {
            name: "PREDATORY ADVANCE",
            value: JSON.stringify({'card': 'hunt_predatory_advance', 'embed_type': 123, 'array_number': 117})
          },
          {
            name: "PRIMAL ROAR!",
            value: JSON.stringify({'card': 'hunt33', 'embed_type': 1, 'array_number': 118})
          },
          {
            name: "PROWL!",
            value: JSON.stringify({'card': 'hunt31', 'embed_type': 1, 'array_number': 119})
          },
          {
            name: "RESILIENT!",
            value: JSON.stringify({'card': 'hunt32', 'embed_type': 1, 'array_number': 120})
          },
          {
            name: "RESUSCITATE",
            value: JSON.stringify({'card': 'hunt_resuscitate', 'embed_type': 12, 'array_number': 121})
          },
          {
            name: "SAVAGE",
            value: JSON.stringify({'card': 'hunt_savage', 'embed_type': 123, 'array_number': 122})
          },
          {
            name: "SAVAGE SLASH!",
            value: JSON.stringify({'card': 'hunt29', 'embed_type': 1, 'array_number': 123})
          },
          {
            name: "SWIPE",
            value: JSON.stringify({'card': 'hunt_swipe', 'embed_type': 23, 'array_number': 124})
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