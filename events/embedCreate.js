const { Client, CommandInteraction } = require('discord.js')
const index = require("../handler/index.js")
const dicethrone = require("../dicethrone.js")
Client.heroCards = require("../heroCards.json")
// const customEmoji = require("./customEmoji.js")
const { MessageAttachment, MessageEmbed } = require('discord.js');
const client = require('../dicethrone.js');
const { get } = require('lodash');

async function embedCreate(client, interaction, args) {
  const response = JSON.parse(args);
  // console.log(`CLIENT = ${JSON.stringify(client)}`);
  console.log(`INTERACTION= ${JSON.stringify(interaction.commandName)}`);
  console.log(`card = ${response.cardId}`);
  console.log(`embedType = ${response.embedType}`);
  console.log(`array_number = ${response.arrayNumber}`);
  if ( response.embedType === 2 ) {
    cardEmbed2(client, interaction, args)
  } else if ( response.embedType === 12 ) {
    cardEmbed12(client, interaction, args)
  } else if ( response.embedType === "2hb" ) {
    cardEmbed2hb(client, interaction, args)
  } else if ( response.embedType === 134 ) {
    cardEmbed134(client, interaction, args)
  } else if ( response.embedType === 136 ) {
    cardEmbed136(client, interaction, args)
  } else if ( response.embedType === 234 ) {
    cardEmbed234(client, interaction, args)
  } else if ( response.embedType === 1234 ) {
    cardEmbed1234(client, interaction, args)
  } else if ( response.embedType === 1346 ) {
    cardEmbed1346(client, interaction, args)
  } else if ( response.embedType === 12345 ) {
    cardEmbed12345(client, interaction, args)
  } else if ( response.embedType === 12346 ) {
    cardEmbed12346(client, interaction, args)
  } else if ( response.embedType === 13567 ) {
    cardEmbed13567(client, interaction, args)
  } else if ( response.embedType === 123467 ) {
    cardEmbed123467(client, interaction, args)
  }
}

async function cardEmbed2(user, interaction, args) {
  try {
    const response = JSON.parse(args)
    const cardImage = new MessageAttachment(`./images/${response.cardId}.jpg`);
    const cardThumbnail = new MessageAttachment(`./images/${Client.heroCards[response.arrayNumber].thumbnail}`);
    const embed = new MessageEmbed()
      .setColor(Client.heroCards[response.arrayNumber].diceColor)
      .setAuthor(Client.heroCards[response.arrayNumber].hero)
      .setTitle(`${Client.heroCards[response.arrayNumber].title}`)
      .setDescription(`${Client.heroCards[response.arrayNumber].cardType} \n\u200b`)
      .addFields({
        name:'Cost:',
        value: `**${Client.heroCards[response.arrayNumber].cost}** <:cp_icon:876984072654684200>`,
        inline: true
      }, {
        name:'Location:',
        value: `${Client.heroCards[response.arrayNumber].location} \n\u200b`,
        inline: true
      }, {
        name:'Ability Description:',
        value: `${Client.heroCards[response.arrayNumber].text}`
      })
      .setImage(`attachment://${response.cardId}.jpg`)
      .setThumbnail(`attachment://${Client.heroCards[response.arrayNumber].thumbnail}`)
    await interaction.followUp({
      embeds: [embed],
      files: [cardImage, cardThumbnail]
    });
  } catch (err) {
    console.log(err);
  }
}

async function cardEmbed2hb(user, interaction, args) {
  try {
    const response = JSON.parse(args)
    const cardImage = new MessageAttachment(`./images/${response.cardId}.jpg`);
    const cardThumbnail = new MessageAttachment(`./images/${Client.heroCards[response.arrayNumber].thumbnail}`);
    const embed = new MessageEmbed()
      .setColor(Client.heroCards[response.arrayNumber].diceColor)
      .setAuthor(Client.heroCards[response.arrayNumber].hero)
      .setTitle(`${Client.heroCards[response.arrayNumber].title}`)
      .setDescription(`${Client.heroCards[response.arrayNumber].cardType} \n\u200b`)
      .addFields({
        name:'Location:',
        value: `${Client.heroCards[response.arrayNumber].location} \n\u200b`,
        inline: true
      }, {
        name:'Ability Description:',
        value: `${Client.heroCards[response.arrayNumber].text}`
      })
      .setImage(`attachment://${response.cardId}.jpg`)
      .setThumbnail(`attachment://${Client.heroCards[response.arrayNumber].thumbnail}`)
    await interaction.followUp({
      embeds: [embed],
      files: [cardImage, cardThumbnail]
    });
  } catch (err) {
    console.log(err);
  }
}

async function cardEmbed12(user, interaction, args) {
  try {
    const response = JSON.parse(args)
    const cardImage = new MessageAttachment(`./images/${response.cardId}.jpg`);
    const cardThumbnail = new MessageAttachment(`./images/${Client.heroCards[response.arrayNumber].thumbnail}`);
    const embed = new MessageEmbed()
      .setColor(Client.heroCards[response.arrayNumber].diceColor)
      .setAuthor(Client.heroCards[response.arrayNumber].hero)
      .setTitle(`${Client.heroCards[response.arrayNumber].title}`)
      .setDescription(`${Client.heroCards[response.arrayNumber].cardType} \n\u200b`)
      .addFields({
        name:'Location:',
        value: `${Client.heroCards[response.arrayNumber].location} \n\u200b`,
        inline: true
      }, {
        name:'Activation Requirement:',
        value: `${Client.heroCards[response.arrayNumber].req} \n\u200b`
      }, {
        name:'Ability Description:',
        value: `${Client.heroCards[response.arrayNumber].text}`
      })
      .setImage(`attachment://${response.cardId}.jpg`)
      .setThumbnail(`attachment://${Client.heroCards[response.arrayNumber].thumbnail}`)
    await interaction.followUp({
      embeds: [embed],
      files: [cardImage, cardThumbnail]
    });
  } catch (err) {
    console.log(err);
  }
}

async function cardEmbed134(client, interaction, args) {
  const response = JSON.parse(args)
  try {
    const cardImage = new MessageAttachment(`./images/${response.cardId}.jpg`);
    const cardThumbnail = new MessageAttachment(`./images/${Client.heroCards[response.arrayNumber].thumbnail}`);
    const embed = new MessageEmbed()
      .setColor(Client.heroCards[response.arrayNumber].diceColor)
      .setAuthor(Client.heroCards[response.arrayNumber].hero)
      .setTitle(`${Client.heroCards[response.arrayNumber].title}`)
      .setDescription(`${Client.heroCards[response.arrayNumber].cardType} \n\u200b`)
      .addFields({
        name:'Location:',
        value: `${Client.heroCards[response.arrayNumber].location} \n\u200b`,
        inline: true
      }, {
        name:'Activation Requirement:',
        value: `${Client.heroCards[response.arrayNumber].req} \n\u200b`
      })
      .setImage(`attachment://${response.cardId}.jpg`)
      .setThumbnail(`attachment://${Client.heroCards[response.arrayNumber].thumbnail}`)
    await interaction.followUp({
      embeds: [embed],
      files: [cardImage, cardThumbnail]
    });
  } catch (err) {
    console.log(err);
  }
  try {
    const cardImage2 = new MessageAttachment(`./images/${Client.heroCards[response.arrayNumber].cardIdB}.jpg`);
    const cardThumbnail2 = new MessageAttachment(`./images/${Client.heroCards[response.arrayNumber].thumbnailB}`);
    const embed2 = new MessageEmbed()
      .setColor(Client.heroCards[response.arrayNumber].diceColor)
      .setAuthor(Client.heroCards[response.arrayNumber].hero)
      .setTitle(`${Client.heroCards[response.arrayNumber].titleB}`)
      .setDescription(`${Client.heroCards[response.arrayNumber].cardTypeB} \n\u200b`)
      .addFields({
        name:'Cost:',
        value: `**${Client.heroCards[response.arrayNumber].costB}** <:cp_icon:876984072654684200>`,
        inline: true
      }, {
        name:'Location:',
        value: `${Client.heroCards[response.arrayNumber].locationB} \n\u200b`,
        inline: true
      }, {
        name:'Activation Requirement:',
        value: `${Client.heroCards[response.arrayNumber].reqB} \n\u200b`
      }, {
        name:'Ability Description:',
        value: `${Client.heroCards[response.arrayNumber].textB}`
      })
      .setImage(`attachment://${Client.heroCards[response.arrayNumber].cardIdB}.jpg`)
      .setThumbnail(`attachment://${Client.heroCards[response.arrayNumber].thumbnailB}`)
    await interaction.followUp({
      embeds: [embed2],
      files: [cardImage2, cardThumbnail2]
    });
  } catch (err) {
    console.log(err);
  }
}

async function cardEmbed136(client, interaction, args) {
  const response = JSON.parse(args)
  try {
    const cardImage = new MessageAttachment(`./images/${response.cardId}.jpg`);
    const cardThumbnail = new MessageAttachment(`./images/${Client.heroCards[response.arrayNumber].thumbnail}`);
    const embed = new MessageEmbed()
      .setColor(Client.heroCards[response.arrayNumber].diceColor)
      .setAuthor(Client.heroCards[response.arrayNumber].hero)
      .setTitle(`${Client.heroCards[response.arrayNumber].title}`)
      .setDescription(`${Client.heroCards[response.arrayNumber].cardType} \n\u200b`)
      .addFields({
        name:'Location:',
        value: `${Client.heroCards[response.arrayNumber].location} \n\u200b`,
        inline: true
      }, {
        name:'Activation Requirement:',
        value: `${Client.heroCards[response.arrayNumber].req} \n\u200b`
      })
      .setImage(`attachment://${response.cardId}.jpg`)
      .setThumbnail(`attachment://${Client.heroCards[response.arrayNumber].thumbnail}`)
    await interaction.followUp({
      embeds: [embed],
      files: [cardImage, cardThumbnail]
    });
  } catch (err) {
    console.log(err);
  }
  try {
    const cardImage2 = new MessageAttachment(`./images/${Client.heroCards[response.arrayNumber].cardIdB}.jpg`);
    const cardThumbnail2 = new MessageAttachment(`./images/${Client.heroCards[response.arrayNumber].thumbnailB}`);
    const embed2 = new MessageEmbed()
      .setColor(Client.heroCards[response.arrayNumber].diceColor)
      .setAuthor(Client.heroCards[response.arrayNumber].hero)
      .setTitle(`${Client.heroCards[response.arrayNumber].titleB}`)
      .setDescription(`${Client.heroCards[response.arrayNumber].cardTypeB} \n\u200b`)
      .addFields({
        name:'Cost:',
        value: `**${Client.heroCards[response.arrayNumber].costB}** <:cp_icon:876984072654684200>`,
        inline: true
      }, {
        name:'Location:',
        value: `${Client.heroCards[response.arrayNumber].locationB} \n\u200b`,
        inline: true
      }, {
        name:'Activation Requirement:',
        value: `${Client.heroCards[response.arrayNumber].reqB} \n\u200b`
      })
      .setImage(`attachment://${Client.heroCards[response.arrayNumber].cardIdB}.jpg`)
      .setThumbnail(`attachment://${Client.heroCards[response.arrayNumber].thumbnailB}`)
    await interaction.followUp({
      embeds: [embed2],
      files: [cardImage2, cardThumbnail2]
    });
  } catch (err) {
    console.log(err);
  }
  try {
    const cardImage3 = new MessageAttachment(`./images/${Client.heroCards[response.arrayNumber].cardIdC}.jpg`);
    const cardThumbnail3 = new MessageAttachment(`./images/${Client.heroCards[response.arrayNumber].thumbnailC}`);
    const embed3 = new MessageEmbed()
      .setColor(Client.heroCards[response.arrayNumber].diceColor)
      .setAuthor(Client.heroCards[response.arrayNumber].hero)
      .setTitle(`${Client.heroCards[response.arrayNumber].titleC}`)
      .setDescription(`${Client.heroCards[response.arrayNumber].cardTypeC} \n\u200b`)
      .addFields({
        name:'Cost:',
        value: `**${Client.heroCards[response.arrayNumber].costC}** <:cp_icon:876984072654684200>`,
        inline: true
      }, {
        name:'Location:',
        value: `${Client.heroCards[response.arrayNumber].locationC} \n\u200b`,
        inline: true
      }, {
        name:'Activation Requirement:',
        value: `${Client.heroCards[response.arrayNumber].reqC} \n\u200b`
      }, {
        name:'Ability Description:',
        value: `${Client.heroCards[response.arrayNumber].textC}`
      })
      .setImage(`attachment://${Client.heroCards[response.arrayNumber].cardIdC}.jpg`)
      .setThumbnail(`attachment://${Client.heroCards[response.arrayNumber].thumbnailC}`)
    await interaction.followUp({
      embeds: [embed3],
      files: [cardImage3, cardThumbnail3]
    });
  } catch (err) {
    console.log(err);
  }
}

async function cardEmbed234(client, interaction, args) {
  const response = JSON.parse(args)
  try {
    const cardImage = new MessageAttachment(`./images/${response.cardId}.jpg`);
    const cardThumbnail = new MessageAttachment(`./images/${Client.heroCards[response.arrayNumber].thumbnail}`);
    const embed = new MessageEmbed()
      .setColor(Client.heroCards[response.arrayNumber].diceColor)
      .setAuthor(Client.heroCards[response.arrayNumber].hero)
      .setTitle(`${Client.heroCards[response.arrayNumber].title}`)
      .setDescription(`${Client.heroCards[response.arrayNumber].cardType} \n\u200b`)
      .addFields({
        name:'Location:',
        value: `${Client.heroCards[response.arrayNumber].location} \n\u200b`,
        inline: true
      }, {
        name:'Ability Description:',
        value: `${Client.heroCards[response.arrayNumber].text}`
      })
      .setImage(`attachment://${response.cardId}.jpg`)
      .setThumbnail(`attachment://${Client.heroCards[response.arrayNumber].thumbnail}`)
    await interaction.followUp({
      embeds: [embed],
      files: [cardImage, cardThumbnail]
    });
  } catch (err) {
    console.log(err);
  }
  try {
    const cardImage2 = new MessageAttachment(`./images/${Client.heroCards[response.arrayNumber].cardIdB}.jpg`);
    const cardThumbnail2 = new MessageAttachment(`./images/${Client.heroCards[response.arrayNumber].thumbnailB}`);
    const embed2 = new MessageEmbed()
      .setColor(Client.heroCards[response.arrayNumber].diceColor)
      .setAuthor(Client.heroCards[response.arrayNumber].hero)
      .setTitle(`${Client.heroCards[response.arrayNumber].titleB}`)
      .setDescription(`${Client.heroCards[response.arrayNumber].cardTypeB} \n\u200b`)
      .addFields({
        name:'Cost:',
        value: `**${Client.heroCards[response.arrayNumber].costB}** <:cp_icon:876984072654684200>`,
        inline: true
      }, {
        name:'Location:',
        value: `${Client.heroCards[response.arrayNumber].locationB} \n\u200b`,
        inline: true
      }, {
        name:'Activation Requirement:',
        value: `${Client.heroCards[response.arrayNumber].reqB} \n\u200b`
      }, {
        name:'Ability Description:',
        value: `${Client.heroCards[response.arrayNumber].textB}`
      })
      .setImage(`attachment://${Client.heroCards[response.arrayNumber].cardIdB}.jpg`)
      .setThumbnail(`attachment://${Client.heroCards[response.arrayNumber].thumbnailB}`)
    await interaction.followUp({
      embeds: [embed2],
      files: [cardImage2, cardThumbnail2]
    });
  } catch (err) {
    console.log(err);
  }
}

async function cardEmbed1234(client, interaction, args) {
  const response = JSON.parse(args)
  try {
    const cardImage = new MessageAttachment(`./images/${response.cardId}.jpg`);
    const cardThumbnail = new MessageAttachment(`./images/${Client.heroCards[response.arrayNumber].thumbnail}`);
    const embed = new MessageEmbed()
      .setColor(Client.heroCards[response.arrayNumber].diceColor)
      .setAuthor(Client.heroCards[response.arrayNumber].hero)
      .setTitle(`${Client.heroCards[response.arrayNumber].title}`)
      .setDescription(`${Client.heroCards[response.arrayNumber].cardType} \n\u200b`)
      .addFields({
        name:'Location:',
        value: `${Client.heroCards[response.arrayNumber].location} \n\u200b`,
        inline: true
      }, {
        name:'Activation Requirement:',
        value: `${Client.heroCards[response.arrayNumber].req} \n\u200b`
      }, {
        name:'Ability Description:',
        value: `${Client.heroCards[response.arrayNumber].text}`
      })
      .setImage(`attachment://${response.cardId}.jpg`)
      .setThumbnail(`attachment://${Client.heroCards[response.arrayNumber].thumbnail}`)
    await interaction.followUp({
      embeds: [embed],
      files: [cardImage, cardThumbnail]
    });
  } catch (err) {
    console.log(err);
  }
  try {
    const cardImage2 = new MessageAttachment(`./images/${Client.heroCards[response.arrayNumber].cardIdB}.jpg`);
    const cardThumbnail2 = new MessageAttachment(`./images/${Client.heroCards[response.arrayNumber].thumbnailB}`);
    const embed2 = new MessageEmbed()
      .setColor(Client.heroCards[response.arrayNumber].diceColor)
      .setAuthor(Client.heroCards[response.arrayNumber].hero)
      .setTitle(`${Client.heroCards[response.arrayNumber].titleB}`)
      .setDescription(`${Client.heroCards[response.arrayNumber].cardTypeB} \n\u200b`)
      .addFields({
        name:'Cost:',
        value: `**${Client.heroCards[response.arrayNumber].costB}** <:cp_icon:876984072654684200>`,
        inline: true
      }, {
        name:'Location:',
        value: `${Client.heroCards[response.arrayNumber].locationB} \n\u200b`,
        inline: true
      }, {
        name:'Activation Requirement:',
        value: `${Client.heroCards[response.arrayNumber].reqB} \n\u200b`
      }, {
        name:'Ability Description:',
        value: `${Client.heroCards[response.arrayNumber].textB}`
      })
      .setImage(`attachment://${Client.heroCards[response.arrayNumber].cardIdB}.jpg`)
      .setThumbnail(`attachment://${Client.heroCards[response.arrayNumber].thumbnailB}`)
    await interaction.followUp({
      embeds: [embed2],
      files: [cardImage2, cardThumbnail2]
    });
  } catch (err) {
    console.log(err);
  }
  try {
    const cardImage3 = new MessageAttachment(`./images/${Client.heroCards[response.arrayNumber].cardIdC}.jpg`);
    const cardThumbnail3 = new MessageAttachment(`./images/${Client.heroCards[response.arrayNumber].thumbnailC}`);
    const embed3 = new MessageEmbed()
      .setColor(Client.heroCards[response.arrayNumber].diceColor)
      .setAuthor(Client.heroCards[response.arrayNumber].hero)
      .setTitle(`${Client.heroCards[response.arrayNumber].titleC}`)
      .setDescription(`${Client.heroCards[response.arrayNumber].cardTypeC} \n\u200b`)
      .addFields({
        name:'Cost:',
        value: `**${Client.heroCards[response.arrayNumber].costC}** <:cp_icon:876984072654684200>`,
        inline: true
      }, {
        name:'Location:',
        value: `${Client.heroCards[response.arrayNumber].locationC} \n\u200b`,
        inline: true
      }, {
        name:'Activation Requirement:',
        value: `${Client.heroCards[response.arrayNumber].reqC} \n\u200b`
      }, {
        name:'Ability Description:',
        value: `${Client.heroCards[response.arrayNumber].textC}`
      })
      .setImage(`attachment://${Client.heroCards[response.arrayNumber].cardIdC}.jpg`)
      .setThumbnail(`attachment://${Client.heroCards[response.arrayNumber].thumbnailC}`)
    await interaction.followUp({
      embeds: [embed3],
      files: [cardImage3, cardThumbnail3]
    });
  } catch (err) {
    console.log(err);
  }
}

async function cardEmbed1346(client, interaction, args) {
  const response = JSON.parse(args)
  try {
    const cardImage = new MessageAttachment(`./images/${response.cardId}.jpg`);
    const cardThumbnail = new MessageAttachment(`./images/${Client.heroCards[response.arrayNumber].thumbnail}`);
    const embed = new MessageEmbed()
      .setColor(Client.heroCards[response.arrayNumber].diceColor)
      .setAuthor(Client.heroCards[response.arrayNumber].hero)
      .setTitle(`${Client.heroCards[response.arrayNumber].title}`)
      .setDescription(`${Client.heroCards[response.arrayNumber].cardType} \n\u200b`)
      .addFields({
        name:'Location:',
        value: `${Client.heroCards[response.arrayNumber].location} \n\u200b`,
        inline: true
      }, {
        name:'Activation Requirement:',
        value: `${Client.heroCards[response.arrayNumber].req} \n\u200b`
      })
      .setImage(`attachment://${response.cardId}.jpg`)
      .setThumbnail(`attachment://${Client.heroCards[response.arrayNumber].thumbnail}`)
    await interaction.followUp({
      embeds: [embed],
      files: [cardImage, cardThumbnail]
    });
  } catch (err) {
    console.log(err);
  }
  try {
    const cardImage2 = new MessageAttachment(`./images/${Client.heroCards[response.arrayNumber].cardIdB}.jpg`);
    const cardThumbnail2 = new MessageAttachment(`./images/${Client.heroCards[response.arrayNumber].thumbnailB}`);
    const embed2 = new MessageEmbed()
      .setColor(Client.heroCards[response.arrayNumber].diceColor)
      .setAuthor(Client.heroCards[response.arrayNumber].hero)
      .setTitle(`${Client.heroCards[response.arrayNumber].titleB}`)
      .setDescription(`${Client.heroCards[response.arrayNumber].cardTypeB} \n\u200b`)
      .addFields({
        name:'Cost:',
        value: `**${Client.heroCards[response.arrayNumber].costB}** <:cp_icon:876984072654684200>`,
        inline: true
      }, {
        name:'Location:',
        value: `${Client.heroCards[response.arrayNumber].locationB} \n\u200b`,
        inline: true
      }, {
        name:'Activation Requirement:',
        value: `${Client.heroCards[response.arrayNumber].reqB} \n\u200b`
      }, {
        name:'Ability Description:',
        value: `${Client.heroCards[response.arrayNumber].textB}`
      })
      .setImage(`attachment://${Client.heroCards[response.arrayNumber].cardIdB}.jpg`)
      .setThumbnail(`attachment://${Client.heroCards[response.arrayNumber].thumbnailB}`)
    await interaction.followUp({
      embeds: [embed2],
      files: [cardImage2, cardThumbnail2]
    });
  } catch (err) {
    console.log(err);
  }
  try {
    const cardImage3 = new MessageAttachment(`./images/${Client.heroCards[response.arrayNumber].cardIdC}.jpg`);
    const cardThumbnail3 = new MessageAttachment(`./images/${Client.heroCards[response.arrayNumber].thumbnailC}`);
    const embed3 = new MessageEmbed()
      .setColor(Client.heroCards[response.arrayNumber].diceColor)
      .setAuthor(Client.heroCards[response.arrayNumber].hero)
      .setTitle(`${Client.heroCards[response.arrayNumber].titleC}`)
      .setDescription(`${Client.heroCards[response.arrayNumber].cardTypeC} \n\u200b`)
      .addFields({
        name:'Cost:',
        value: `**${Client.heroCards[response.arrayNumber].costC}** <:cp_icon:876984072654684200>`,
        inline: true
      }, {
        name:'Location:',
        value: `${Client.heroCards[response.arrayNumber].locationC} \n\u200b`,
        inline: true
      }, {
        name:'Activation Requirement:',
        value: `${Client.heroCards[response.arrayNumber].reqC} \n\u200b`
      }, {
        name:'Ability Description:',
        value: `${Client.heroCards[response.arrayNumber].textC}`
      })
      .setImage(`attachment://${Client.heroCards[response.arrayNumber].cardIdC}.jpg`)
      .setThumbnail(`attachment://${Client.heroCards[response.arrayNumber].thumbnailC}`)
    await interaction.followUp({
      embeds: [embed3],
      files: [cardImage3, cardThumbnail3]
    });
  } catch (err) {
    console.log(err);
  }
}

async function cardEmbed12346(client, interaction, args) {
}

async function cardEmbed13567(client, interaction, args) {
}

async function cardEmbed123467(client, interaction, args) {
}

module.exports = {
 embedCreate
}



// async function cardEmbed136(client, interaction, args) {
//   const response = JSON.parse(args)
//   try {
//     const cardImage = new MessageAttachment(`./images/${response.cardId}.jpg`);
//     const cardThumbnail = new MessageAttachment(`./images/${Client.heroCards[response.arrayNumber].thumbnail}`);
//     const embed = new MessageEmbed()
//       .setColor(Client.heroCards[response.arrayNumber].diceColor)
//       .setAuthor(Client.heroCards[response.arrayNumber].hero)
//       .setTitle(`${Client.heroCards[response.arrayNumber].title}`)
//       .setDescription(`${Client.heroCards[response.arrayNumber].cardType} \n\u200b`)
//       .addFields({
//         name:'Location:',
//         value: `${Client.heroCards[response.arrayNumber].location} \n\u200b`,
//         inline: true
//       }, {
//         name:'Activation Requirement:',
//         value: `${Client.heroCards[response.arrayNumber].req} \n\u200b`
//       }, {
//         name:'Ability Description:',
//         value: `${Client.heroCards[response.arrayNumber].text}`
//       })
//       .setImage(`attachment://${response.cardId}.jpg`)
//       .setThumbnail(`attachment://${Client.heroCards[response.arrayNumber].thumbnail}`)
//     await interaction.followUp({
//       embeds: [embed],
//       files: [cardImage, cardThumbnail]
//     });
//   } catch (err) {
//     console.log(err);
//   }
//   try {
//     const cardImage2 = new MessageAttachment(`./images/${Client.heroCards[response.arrayNumber].cardIdB}.jpg`);
//     const cardThumbnail2 = new MessageAttachment(`./images/${Client.heroCards[response.arrayNumber].thumbnailB}`);
//     const embed2 = new MessageEmbed()
//       .setColor(Client.heroCards[response.arrayNumber].diceColor)
//       .setAuthor(Client.heroCards[response.arrayNumber].hero)
//       .setTitle(`${Client.heroCards[response.arrayNumber].titleB}`)
//       .setDescription(`${Client.heroCards[response.arrayNumber].cardTypeB} \n\u200b`)
//       .addFields({
//         name:'Cost:',
//         value: `**${Client.heroCards[response.arrayNumber].costB}** <:cp_icon:876984072654684200>`,
//         inline: true
//       }, {
//         name:'Location:',
//         value: `${Client.heroCards[response.arrayNumber].locationB} \n\u200b`,
//         inline: true
//       }, {
//         name:'Activation Requirement:',
//         value: `${Client.heroCards[response.arrayNumber].reqB} \n\u200b`
//       }, {
//         name:'Ability Description:',
//         value: `${Client.heroCards[response.arrayNumber].textB} \n\u200b\n\u200b`
//       }, {
//         name:'2nd Ability:',
//         value: `**${Client.heroCards[response.arrayNumber].titleB2}** \n\u200b`
//       }, {
//         name:'Activation Requirement:',
//         value: `${Client.heroCards[response.arrayNumber].reqB2} \n\u200b`
//       },{
//         name:'Ability Description:',
//         value: `${Client.heroCards[response.arrayNumber].textB2}`
//       })
//       .setImage(`attachment://${Client.heroCards[response.arrayNumber].cardIdB}.jpg`)
//       .setThumbnail(`attachment://${Client.heroCards[response.arrayNumber].thumbnailB}`)
//     await interaction.followUp({
//       embeds: [embed2],
//       files: [cardImage2, cardThumbnail2]
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }