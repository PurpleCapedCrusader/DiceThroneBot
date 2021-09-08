const { Client, CommandInteraction } = require('discord.js')
const index = require("../handler/index.js")
Client.dataIndex = require("../dataIndex.js")
const cardSlashIndex = Client.dataIndex.cardSlashIndex;
const dicethrone = require("../dicethrone.js")
Client.heroCards = require("../heroCards.json")
// const customEmoji = require("./customEmoji.js")
const { MessageAttachment, MessageEmbed } = require('discord.js');
const client = require('../dicethrone.js');
const { get } = require('lodash');

async function embedCreate(client, interaction, args) {
  // const response = JSON.parse(args);
  console.log(`ARGS = ${args}`)
  console.log(`asdfa,sbfa,dfns = ${cardSlashIndex[43]}`)
  const cardIndex = cardSlashIndex.indexOf(`${args}`);
  const embedType = Client.heroCards[cardIndex].embedType;

  // console.log(`CLIENT = ${JSON.stringify(client)}`);
  console.log(`INTERACTION= ${JSON.stringify(interaction.commandName)}`);
  console.log(`cardIndex = ${cardIndex}`);
  // console.log(`card = ${Client.heroCards[cardIndex].cardId}`);
  console.log(`embedType = ${embedType}`);
  // console.log(`array_number = ${cardIndex}`);
  if ( embedType === 2 ) {
    cardEmbed2(client, interaction, args, cardIndex)
  } else if ( embedType === 12 ) {
    cardEmbed12(client, interaction, args, cardIndex)
  } else if ( embedType === "2hb" ) {
    cardEmbed2hb(client, interaction, args, cardIndex)
  } else if ( embedType === 134 ) {
    cardEmbed134(client, interaction, args, cardIndex)
  } else if ( embedType === 136 ) {
    cardEmbed136(client, interaction, args, cardIndex)
  } else if ( embedType === 234 ) {
    cardEmbed234(client, interaction, args, cardIndex)
  } else if ( embedType === 1234 ) {
    cardEmbed1234(client, interaction, args, cardIndex)
  } else if ( embedType === 1346 ) {
    cardEmbed1346(client, interaction, args, cardIndex)
  } else if ( embedType === 12345 ) {
    cardEmbed12345(client, interaction, args, cardIndex)
  } else if ( embedType === 12346 ) {
    cardEmbed12346(client, interaction, args, cardIndex)
  } else if ( embedType === 13567 ) {
    cardEmbed13567(client, interaction, args, cardIndex)
  } else if ( embedType === 123467 ) {
    cardEmbed123467(client, interaction, args, cardIndex)
  }
}

async function cardEmbed2(user, interaction, args, cardIndex) {
  try {
    // const response = JSON.pa1rse(args)
    const cardImage = new MessageAttachment(`./images/${Client.heroCards[cardIndex].cardId}.jpg`);
    const cardThumbnail = new MessageAttachment(`./images/${Client.heroCards[cardIndex].thumbnail}`);
    const embed = new MessageEmbed()
      .setColor(Client.heroCards[cardIndex].diceColor)
      .setAuthor(Client.heroCards[cardIndex].hero)
      .setTitle(`${Client.heroCards[cardIndex].title}`)
      .setDescription(`${Client.heroCards[cardIndex].cardType} \n\u200b`)
      .addFields({
        name:'Cost:',
        value: `**${Client.heroCards[cardIndex].cost}** <:cp_icon:876984072654684200>`,
        inline: true
      }, {
        name:'Location:',
        value: `${Client.heroCards[cardIndex].location} \n\u200b`,
        inline: true
      }, {
        name:'Ability Description:',
        value: `${Client.heroCards[cardIndex].text}`
      })
      .setImage(`attachment://${Client.heroCards[cardIndex].cardId}.jpg`)
      .setThumbnail(`attachment://${Client.heroCards[cardIndex].thumbnail}`)
    await interaction.followUp({
      embeds: [embed],
      files: [cardImage, cardThumbnail]
    });
  } catch (err) {
    console.log(err);
  }
}

async function cardEmbed2hb(user, interaction, args, cardIndex) {
  try {
    // const response = JSON.parse(args)
    const cardImage = new MessageAttachment(`./images/${Client.heroCards[cardIndex].cardId}.jpg`);
    const cardThumbnail = new MessageAttachment(`./images/${Client.heroCards[cardIndex].thumbnail}`);
    const embed = new MessageEmbed()
      .setColor(Client.heroCards[cardIndex].diceColor)
      .setAuthor(Client.heroCards[cardIndex].hero)
      .setTitle(`${Client.heroCards[cardIndex].title}`)
      .setDescription(`${Client.heroCards[cardIndex].cardType} \n\u200b`)
      .addFields({
        name:'Location:',
        value: `${Client.heroCards[cardIndex].location} \n\u200b`,
        inline: true
      }, {
        name:'Ability Description:',
        value: `${Client.heroCards[cardIndex].text}`
      })
      .setImage(`attachment://${Client.heroCards[cardIndex].cardId}.jpg`)
      .setThumbnail(`attachment://${Client.heroCards[cardIndex].thumbnail}`)
    await interaction.followUp({
      embeds: [embed],
      files: [cardImage, cardThumbnail]
    });
  } catch (err) {
    console.log(err);
  }
}

async function cardEmbed12(user, interaction, args, cardIndex) {
  try {
    // const response = JSON.parse(args)
    const cardImage = new MessageAttachment(`./images/${Client.heroCards[cardIndex].cardId}.jpg`);
    const cardThumbnail = new MessageAttachment(`./images/${Client.heroCards[cardIndex].thumbnail}`);
    const embed = new MessageEmbed()
      .setColor(Client.heroCards[cardIndex].diceColor)
      .setAuthor(Client.heroCards[cardIndex].hero)
      .setTitle(`${Client.heroCards[cardIndex].title}`)
      .setDescription(`${Client.heroCards[cardIndex].cardType} \n\u200b`)
      .addFields({
        name:'Location:',
        value: `${Client.heroCards[cardIndex].location} \n\u200b`,
        inline: true
      }, {
        name:'Activation Requirement:',
        value: `${Client.heroCards[cardIndex].req} \n\u200b`
      }, {
        name:'Ability Description:',
        value: `${Client.heroCards[cardIndex].text}`
      })
      .setImage(`attachment://${Client.heroCards[cardIndex].cardId}.jpg`)
      .setThumbnail(`attachment://${Client.heroCards[cardIndex].thumbnail}`)
    await interaction.followUp({
      embeds: [embed],
      files: [cardImage, cardThumbnail]
    });
  } catch (err) {
    console.log(err);
  }
}

async function cardEmbed134(client, interaction, args, cardIndex) {
  try {
    const cardImage = new MessageAttachment(`./images/${Client.heroCards[cardIndex].cardId}.jpg`);
    const cardThumbnail = new MessageAttachment(`./images/${Client.heroCards[cardIndex].thumbnail}`);
    const embed = new MessageEmbed()
      .setColor(Client.heroCards[cardIndex].diceColor)
      .setAuthor(Client.heroCards[cardIndex].hero)
      .setTitle(`${Client.heroCards[cardIndex].title}`)
      .setDescription(`${Client.heroCards[cardIndex].cardType} \n\u200b`)
      .addFields({
        name:'Location:',
        value: `${Client.heroCards[cardIndex].location} \n\u200b`,
        inline: true
      }, {
        name:'Activation Requirement:',
        value: `${Client.heroCards[cardIndex].req} \n\u200b`
      })
      .setImage(`attachment://${Client.heroCards[cardIndex].cardId}.jpg`)
      .setThumbnail(`attachment://${Client.heroCards[cardIndex].thumbnail}`)
    await interaction.followUp({
      embeds: [embed],
      files: [cardImage, cardThumbnail]
    });
  } catch (err) {
    console.log(err);
  }
  try {
    const cardImage2 = new MessageAttachment(`./images/${Client.heroCards[cardIndex].cardIdB}.jpg`);
    const cardThumbnail2 = new MessageAttachment(`./images/${Client.heroCards[cardIndex].thumbnailB}`);
    const embed2 = new MessageEmbed()
      .setColor(Client.heroCards[cardIndex].diceColor)
      .setAuthor(Client.heroCards[cardIndex].hero)
      .setTitle(`${Client.heroCards[cardIndex].titleB}`)
      .setDescription(`${Client.heroCards[cardIndex].cardTypeB} \n\u200b`)
      .addFields({
        name:'Cost:',
        value: `**${Client.heroCards[cardIndex].costB}** <:cp_icon:876984072654684200>`,
        inline: true
      }, {
        name:'Location:',
        value: `${Client.heroCards[cardIndex].locationB} \n\u200b`,
        inline: true
      }, {
        name:'Activation Requirement:',
        value: `${Client.heroCards[cardIndex].reqB} \n\u200b`
      }, {
        name:'Ability Description:',
        value: `${Client.heroCards[cardIndex].textB}`
      })
      .setImage(`attachment://${Client.heroCards[cardIndex].cardIdB}.jpg`)
      .setThumbnail(`attachment://${Client.heroCards[cardIndex].thumbnailB}`)
    await interaction.followUp({
      embeds: [embed2],
      files: [cardImage2, cardThumbnail2]
    });
  } catch (err) {
    console.log(err);
  }
}

async function cardEmbed136(client, interaction, args, cardIndex) {
  try {
    const cardImage = new MessageAttachment(`./images/${Client.heroCards[cardIndex].cardId}.jpg`);
    const cardThumbnail = new MessageAttachment(`./images/${Client.heroCards[cardIndex].thumbnail}`);
    const embed = new MessageEmbed()
      .setColor(Client.heroCards[cardIndex].diceColor)
      .setAuthor(Client.heroCards[cardIndex].hero)
      .setTitle(`${Client.heroCards[cardIndex].title}`)
      .setDescription(`${Client.heroCards[cardIndex].cardType} \n\u200b`)
      .addFields({
        name:'Location:',
        value: `${Client.heroCards[cardIndex].location} \n\u200b`,
        inline: true
      }, {
        name:'Activation Requirement:',
        value: `${Client.heroCards[cardIndex].req} \n\u200b`
      })
      .setImage(`attachment://${Client.heroCards[cardIndex].cardId}.jpg`)
      .setThumbnail(`attachment://${Client.heroCards[cardIndex].thumbnail}`)
    await interaction.followUp({
      embeds: [embed],
      files: [cardImage, cardThumbnail]
    });
  } catch (err) {
    console.log(err);
  }
  try {
    const cardImage2 = new MessageAttachment(`./images/${Client.heroCards[cardIndex].cardIdB}.jpg`);
    const cardThumbnail2 = new MessageAttachment(`./images/${Client.heroCards[cardIndex].thumbnailB}`);
    const embed2 = new MessageEmbed()
      .setColor(Client.heroCards[cardIndex].diceColor)
      .setAuthor(Client.heroCards[cardIndex].hero)
      .setTitle(`${Client.heroCards[cardIndex].titleB}`)
      .setDescription(`${Client.heroCards[cardIndex].cardTypeB} \n\u200b`)
      .addFields({
        name:'Cost:',
        value: `**${Client.heroCards[cardIndex].costB}** <:cp_icon:876984072654684200>`,
        inline: true
      }, {
        name:'Location:',
        value: `${Client.heroCards[cardIndex].locationB} \n\u200b`,
        inline: true
      }, {
        name:'Activation Requirement:',
        value: `${Client.heroCards[cardIndex].reqB} \n\u200b`
      })
      .setImage(`attachment://${Client.heroCards[cardIndex].cardIdB}.jpg`)
      .setThumbnail(`attachment://${Client.heroCards[cardIndex].thumbnailB}`)
    await interaction.followUp({
      embeds: [embed2],
      files: [cardImage2, cardThumbnail2]
    });
  } catch (err) {
    console.log(err);
  }
  try {
    const cardImage3 = new MessageAttachment(`./images/${Client.heroCards[cardIndex].cardIdC}.jpg`);
    const cardThumbnail3 = new MessageAttachment(`./images/${Client.heroCards[cardIndex].thumbnailC}`);
    const embed3 = new MessageEmbed()
      .setColor(Client.heroCards[cardIndex].diceColor)
      .setAuthor(Client.heroCards[cardIndex].hero)
      .setTitle(`${Client.heroCards[cardIndex].titleC}`)
      .setDescription(`${Client.heroCards[cardIndex].cardTypeC} \n\u200b`)
      .addFields({
        name:'Cost:',
        value: `**${Client.heroCards[cardIndex].costC}** <:cp_icon:876984072654684200>`,
        inline: true
      }, {
        name:'Location:',
        value: `${Client.heroCards[cardIndex].locationC} \n\u200b`,
        inline: true
      }, {
        name:'Activation Requirement:',
        value: `${Client.heroCards[cardIndex].reqC} \n\u200b`
      }, {
        name:'Ability Description:',
        value: `${Client.heroCards[cardIndex].textC}`
      })
      .setImage(`attachment://${Client.heroCards[cardIndex].cardIdC}.jpg`)
      .setThumbnail(`attachment://${Client.heroCards[cardIndex].thumbnailC}`)
    await interaction.followUp({
      embeds: [embed3],
      files: [cardImage3, cardThumbnail3]
    });
  } catch (err) {
    console.log(err);
  }
}

async function cardEmbed234(client, interaction, args, cardIndex) {
  try {
    const cardImage = new MessageAttachment(`./images/${Client.heroCards[cardIndex].cardId}.jpg`);
    const cardThumbnail = new MessageAttachment(`./images/${Client.heroCards[cardIndex].thumbnail}`);
    const embed = new MessageEmbed()
      .setColor(Client.heroCards[cardIndex].diceColor)
      .setAuthor(Client.heroCards[cardIndex].hero)
      .setTitle(`${Client.heroCards[cardIndex].title}`)
      .setDescription(`${Client.heroCards[cardIndex].cardType} \n\u200b`)
      .addFields({
        name:'Location:',
        value: `${Client.heroCards[cardIndex].location} \n\u200b`,
        inline: true
      }, {
        name:'Ability Description:',
        value: `${Client.heroCards[cardIndex].text}`
      })
      .setImage(`attachment://${Client.heroCards[cardIndex].cardId}.jpg`)
      .setThumbnail(`attachment://${Client.heroCards[cardIndex].thumbnail}`)
    await interaction.followUp({
      embeds: [embed],
      files: [cardImage, cardThumbnail]
    });
  } catch (err) {
    console.log(err);
  }
  try {
    const cardImage2 = new MessageAttachment(`./images/${Client.heroCards[cardIndex].cardIdB}.jpg`);
    const cardThumbnail2 = new MessageAttachment(`./images/${Client.heroCards[cardIndex].thumbnailB}`);
    const embed2 = new MessageEmbed()
      .setColor(Client.heroCards[cardIndex].diceColor)
      .setAuthor(Client.heroCards[cardIndex].hero)
      .setTitle(`${Client.heroCards[cardIndex].titleB}`)
      .setDescription(`${Client.heroCards[cardIndex].cardTypeB} \n\u200b`)
      .addFields({
        name:'Cost:',
        value: `**${Client.heroCards[cardIndex].costB}** <:cp_icon:876984072654684200>`,
        inline: true
      }, {
        name:'Location:',
        value: `${Client.heroCards[cardIndex].locationB} \n\u200b`,
        inline: true
      }, {
        name:'Activation Requirement:',
        value: `${Client.heroCards[cardIndex].reqB} \n\u200b`
      }, {
        name:'Ability Description:',
        value: `${Client.heroCards[cardIndex].textB}`
      })
      .setImage(`attachment://${Client.heroCards[cardIndex].cardIdB}.jpg`)
      .setThumbnail(`attachment://${Client.heroCards[cardIndex].thumbnailB}`)
    await interaction.followUp({
      embeds: [embed2],
      files: [cardImage2, cardThumbnail2]
    });
  } catch (err) {
    console.log(err);
  }
}

async function cardEmbed1234(client, interaction, args, cardIndex) {
  try {
    const cardImage = new MessageAttachment(`./images/${Client.heroCards[cardIndex].cardId}.jpg`);
    const cardThumbnail = new MessageAttachment(`./images/${Client.heroCards[cardIndex].thumbnail}`);
    const embed = new MessageEmbed()
      .setColor(Client.heroCards[cardIndex].diceColor)
      .setAuthor(Client.heroCards[cardIndex].hero)
      .setTitle(`${Client.heroCards[cardIndex].title}`)
      .setDescription(`${Client.heroCards[cardIndex].cardType} \n\u200b`)
      .addFields({
        name:'Location:',
        value: `${Client.heroCards[cardIndex].location} \n\u200b`,
        inline: true
      }, {
        name:'Activation Requirement:',
        value: `${Client.heroCards[cardIndex].req} \n\u200b`
      }, {
        name:'Ability Description:',
        value: `${Client.heroCards[cardIndex].text}`
      })
      .setImage(`attachment://${Client.heroCards[cardIndex].cardId}.jpg`)
      .setThumbnail(`attachment://${Client.heroCards[cardIndex].thumbnail}`)
    await interaction.followUp({
      embeds: [embed],
      files: [cardImage, cardThumbnail]
    });
  } catch (err) {
    console.log(err);
  }
  try {
    const cardImage2 = new MessageAttachment(`./images/${Client.heroCards[cardIndex].cardIdB}.jpg`);
    const cardThumbnail2 = new MessageAttachment(`./images/${Client.heroCards[cardIndex].thumbnailB}`);
    const embed2 = new MessageEmbed()
      .setColor(Client.heroCards[cardIndex].diceColor)
      .setAuthor(Client.heroCards[cardIndex].hero)
      .setTitle(`${Client.heroCards[cardIndex].titleB}`)
      .setDescription(`${Client.heroCards[cardIndex].cardTypeB} \n\u200b`)
      .addFields({
        name:'Cost:',
        value: `**${Client.heroCards[cardIndex].costB}** <:cp_icon:876984072654684200>`,
        inline: true
      }, {
        name:'Location:',
        value: `${Client.heroCards[cardIndex].locationB} \n\u200b`,
        inline: true
      }, {
        name:'Activation Requirement:',
        value: `${Client.heroCards[cardIndex].reqB} \n\u200b`
      }, {
        name:'Ability Description:',
        value: `${Client.heroCards[cardIndex].textB}`
      })
      .setImage(`attachment://${Client.heroCards[cardIndex].cardIdB}.jpg`)
      .setThumbnail(`attachment://${Client.heroCards[cardIndex].thumbnailB}`)
    await interaction.followUp({
      embeds: [embed2],
      files: [cardImage2, cardThumbnail2]
    });
  } catch (err) {
    console.log(err);
  }
}

async function cardEmbed1346(client, interaction, args, cardIndex) {
  try {
    const cardImage = new MessageAttachment(`./images/${Client.heroCards[cardIndex].cardId}.jpg`);
    const cardThumbnail = new MessageAttachment(`./images/${Client.heroCards[cardIndex].thumbnail}`);
    const embed = new MessageEmbed()
      .setColor(Client.heroCards[cardIndex].diceColor)
      .setAuthor(Client.heroCards[cardIndex].hero)
      .setTitle(`${Client.heroCards[cardIndex].title}`)
      .setDescription(`${Client.heroCards[cardIndex].cardType} \n\u200b`)
      .addFields({
        name:'Location:',
        value: `${Client.heroCards[cardIndex].location} \n\u200b`,
        inline: true
      }, {
        name:'Activation Requirement:',
        value: `${Client.heroCards[cardIndex].req} \n\u200b`
      })
      .setImage(`attachment://${Client.heroCards[cardIndex].cardId}.jpg`)
      .setThumbnail(`attachment://${Client.heroCards[cardIndex].thumbnail}`)
    await interaction.followUp({
      embeds: [embed],
      files: [cardImage, cardThumbnail]
    });
  } catch (err) {
    console.log(err);
  }
  try {
    const cardImage2 = new MessageAttachment(`./images/${Client.heroCards[cardIndex].cardIdB}.jpg`);
    const cardThumbnail2 = new MessageAttachment(`./images/${Client.heroCards[cardIndex].thumbnailB}`);
    const embed2 = new MessageEmbed()
      .setColor(Client.heroCards[cardIndex].diceColor)
      .setAuthor(Client.heroCards[cardIndex].hero)
      .setTitle(`${Client.heroCards[cardIndex].titleB}`)
      .setDescription(`${Client.heroCards[cardIndex].cardTypeB} \n\u200b`)
      .addFields({
        name:'Cost:',
        value: `**${Client.heroCards[cardIndex].costB}** <:cp_icon:876984072654684200>`,
        inline: true
      }, {
        name:'Location:',
        value: `${Client.heroCards[cardIndex].locationB} \n\u200b`,
        inline: true
      }, {
        name:'Activation Requirement:',
        value: `${Client.heroCards[cardIndex].reqB} \n\u200b`
      }, {
        name:'Ability Description:',
        value: `${Client.heroCards[cardIndex].textB}`
      })
      .setImage(`attachment://${Client.heroCards[cardIndex].cardIdB}.jpg`)
      .setThumbnail(`attachment://${Client.heroCards[cardIndex].thumbnailB}`)
    await interaction.followUp({
      embeds: [embed2],
      files: [cardImage2, cardThumbnail2]
    });
  } catch (err) {
    console.log(err);
  }
  try {
    const cardImage3 = new MessageAttachment(`./images/${Client.heroCards[cardIndex].cardIdC}.jpg`);
    const cardThumbnail3 = new MessageAttachment(`./images/${Client.heroCards[cardIndex].thumbnailC}`);
    const embed3 = new MessageEmbed()
      .setColor(Client.heroCards[cardIndex].diceColor)
      .setAuthor(Client.heroCards[cardIndex].hero)
      .setTitle(`${Client.heroCards[cardIndex].titleC}`)
      .setDescription(`${Client.heroCards[cardIndex].cardTypeC} \n\u200b`)
      .addFields({
        name:'Cost:',
        value: `**${Client.heroCards[cardIndex].costC}** <:cp_icon:876984072654684200>`,
        inline: true
      }, {
        name:'Location:',
        value: `${Client.heroCards[cardIndex].locationC} \n\u200b`,
        inline: true
      }, {
        name:'Activation Requirement:',
        value: `${Client.heroCards[cardIndex].reqC} \n\u200b`
      }, {
        name:'Ability Description:',
        value: `${Client.heroCards[cardIndex].textC}`
      })
      .setImage(`attachment://${Client.heroCards[cardIndex].cardIdC}.jpg`)
      .setThumbnail(`attachment://${Client.heroCards[cardIndex].thumbnailC}`)
    await interaction.followUp({
      embeds: [embed3],
      files: [cardImage3, cardThumbnail3]
    });
  } catch (err) {
    console.log(err);
  }
}

async function cardEmbed12345(client, interaction, args, cardIndex) {
  try {
    const cardImage = new MessageAttachment(`./images/${Client.heroCards[cardIndex].cardId}.jpg`);
    const cardThumbnail = new MessageAttachment(`./images/${Client.heroCards[cardIndex].thumbnail}`);
    const embed = new MessageEmbed()
      .setColor(Client.heroCards[cardIndex].diceColor)
      .setAuthor(Client.heroCards[cardIndex].hero)
      .setTitle(`${Client.heroCards[cardIndex].title}`)
      .setDescription(`${Client.heroCards[cardIndex].cardType} \n\u200b`)
      .addFields({
        name:'Location:',
        value: `${Client.heroCards[cardIndex].location} \n\u200b`,
        inline: true
      }, {
        name:'Activation Requirement:',
        value: `${Client.heroCards[cardIndex].req} \n\u200b`
      }, {
        name:'Ability Description:',
        value: `${Client.heroCards[cardIndex].text}`
      })
      .setImage(`attachment://${Client.heroCards[cardIndex].cardId}.jpg`)
      .setThumbnail(`attachment://${Client.heroCards[cardIndex].thumbnail}`)
    await interaction.followUp({
      embeds: [embed],
      files: [cardImage, cardThumbnail]
    });
  } catch (err) {
    console.log(err);
  }
  try {
    const cardImage2 = new MessageAttachment(`./images/${Client.heroCards[cardIndex].cardIdB}.jpg`);
    const cardThumbnail2 = new MessageAttachment(`./images/${Client.heroCards[cardIndex].thumbnailB}`);
    const embed2 = new MessageEmbed()
      .setColor(Client.heroCards[cardIndex].diceColor)
      .setAuthor(Client.heroCards[cardIndex].hero)
      .setTitle(`${Client.heroCards[cardIndex].titleB}`)
      .setDescription(`${Client.heroCards[cardIndex].cardTypeB} \n\u200b`)
      .addFields({
        name:'Cost:',
        value: `**${Client.heroCards[cardIndex].costB}** <:cp_icon:876984072654684200>`,
        inline: true
      }, {
        name:'Location:',
        value: `${Client.heroCards[cardIndex].locationB} \n\u200b`,
        inline: true
      }, {
        name:'Activation Requirement:',
        value: `${Client.heroCards[cardIndex].reqB} \n\u200b`
      }, {
        name:'Ability Description:',
        value: `${Client.heroCards[cardIndex].textB}\n\u200b`
      }, {
        name:'2nd Ability:',
        value: `**${Client.heroCards[cardIndex].titleB2}** \n\u200b`
      }, {
        name:'Activation Requirement:',
        value: `${Client.heroCards[cardIndex].reqB2} \n\u200b`
      },{
        name:'Ability Description:',
        value: `${Client.heroCards[cardIndex].textB2}`
      })
      .setImage(`attachment://${Client.heroCards[cardIndex].cardIdB}.jpg`)
      .setThumbnail(`attachment://${Client.heroCards[cardIndex].thumbnailB}`)
    await interaction.followUp({
      embeds: [embed2],
      files: [cardImage2, cardThumbnail2]
    });
  } catch (err) {
    console.log(err);
  }
}

async function cardEmbed12346(client, interaction, args, cardIndex) {
  try {
    const cardImage = new MessageAttachment(`./images/${Client.heroCards[cardIndex].cardId}.jpg`);
    const cardThumbnail = new MessageAttachment(`./images/${Client.heroCards[cardIndex].thumbnail}`);
    const embed = new MessageEmbed()
      .setColor(Client.heroCards[cardIndex].diceColor)
      .setAuthor(Client.heroCards[cardIndex].hero)
      .setTitle(`${Client.heroCards[cardIndex].title}`)
      .setDescription(`${Client.heroCards[cardIndex].cardType} \n\u200b`)
      .addFields({
        name:'Location:',
        value: `${Client.heroCards[cardIndex].location} \n\u200b`,
        inline: true
      }, {
        name:'Activation Requirement:',
        value: `${Client.heroCards[cardIndex].req} \n\u200b`
      }, {
        name:'Ability Description:',
        value: `${Client.heroCards[cardIndex].text}`
      })
      .setImage(`attachment://${Client.heroCards[cardIndex].cardId}.jpg`)
      .setThumbnail(`attachment://${Client.heroCards[cardIndex].thumbnail}`)
    await interaction.followUp({
      embeds: [embed],
      files: [cardImage, cardThumbnail]
    });
  } catch (err) {
    console.log(err);
  }
  try {
    const cardImage2 = new MessageAttachment(`./images/${Client.heroCards[cardIndex].cardIdB}.jpg`);
    const cardThumbnail2 = new MessageAttachment(`./images/${Client.heroCards[cardIndex].thumbnailB}`);
    const embed2 = new MessageEmbed()
      .setColor(Client.heroCards[cardIndex].diceColor)
      .setAuthor(Client.heroCards[cardIndex].hero)
      .setTitle(`${Client.heroCards[cardIndex].titleB}`)
      .setDescription(`${Client.heroCards[cardIndex].cardTypeB} \n\u200b`)
      .addFields({
        name:'Cost:',
        value: `**${Client.heroCards[cardIndex].costB}** <:cp_icon:876984072654684200>`,
        inline: true
      }, {
        name:'Location:',
        value: `${Client.heroCards[cardIndex].locationB} \n\u200b`,
        inline: true
      }, {
        name:'Activation Requirement:',
        value: `${Client.heroCards[cardIndex].reqB} \n\u200b`
      }, {
        name:'Ability Description:',
        value: `${Client.heroCards[cardIndex].textB}`
      })
      .setImage(`attachment://${Client.heroCards[cardIndex].cardIdB}.jpg`)
      .setThumbnail(`attachment://${Client.heroCards[cardIndex].thumbnailB}`)
    await interaction.followUp({
      embeds: [embed2],
      files: [cardImage2, cardThumbnail2]
    });
  } catch (err) {
    console.log(err);
  }
  try {
    const cardImage3 = new MessageAttachment(`./images/${Client.heroCards[cardIndex].cardIdC}.jpg`);
    const cardThumbnail3 = new MessageAttachment(`./images/${Client.heroCards[cardIndex].thumbnailC}`);
    const embed3 = new MessageEmbed()
      .setColor(Client.heroCards[cardIndex].diceColor)
      .setAuthor(Client.heroCards[cardIndex].hero)
      .setTitle(`${Client.heroCards[cardIndex].titleC}`)
      .setDescription(`${Client.heroCards[cardIndex].cardTypeC} \n\u200b`)
      .addFields({
        name:'Cost:',
        value: `**${Client.heroCards[cardIndex].costC}** <:cp_icon:876984072654684200>`,
        inline: true
      }, {
        name:'Location:',
        value: `${Client.heroCards[cardIndex].locationC} \n\u200b`,
        inline: true
      }, {
        name:'Activation Requirement:',
        value: `${Client.heroCards[cardIndex].reqC} \n\u200b`
      }, {
        name:'Ability Description:',
        value: `${Client.heroCards[cardIndex].textC}`
      })
      .setImage(`attachment://${Client.heroCards[cardIndex].cardIdC}.jpg`)
      .setThumbnail(`attachment://${Client.heroCards[cardIndex].thumbnailC}`)
    await interaction.followUp({
      embeds: [embed3],
      files: [cardImage3, cardThumbnail3]
    });
  } catch (err) {
    console.log(err);
  }
}

async function cardEmbed13567(client, interaction, args, cardIndex) {
  try {
    const cardImage = new MessageAttachment(`./images/${Client.heroCards[cardIndex].cardId}.jpg`);
    const cardThumbnail = new MessageAttachment(`./images/${Client.heroCards[cardIndex].thumbnail}`);
    const embed = new MessageEmbed()
      .setColor(Client.heroCards[cardIndex].diceColor)
      .setAuthor(Client.heroCards[cardIndex].hero)
      .setTitle(`${Client.heroCards[cardIndex].title}`)
      .setDescription(`${Client.heroCards[cardIndex].cardType} \n\u200b`)
      .addFields({
        name:'Location:',
        value: `${Client.heroCards[cardIndex].location} \n\u200b`,
        inline: true
      }, {
        name:'Activation Requirement:',
        value: `${Client.heroCards[cardIndex].req} \n\u200b`
      })
      .setImage(`attachment://${Client.heroCards[cardIndex].cardId}.jpg`)
      .setThumbnail(`attachment://${Client.heroCards[cardIndex].thumbnail}`)
    await interaction.followUp({
      embeds: [embed],
      files: [cardImage, cardThumbnail]
    });
  } catch (err) {
    console.log(err);
  }
  try {
    const cardImage2 = new MessageAttachment(`./images/${Client.heroCards[cardIndex].cardIdB}.jpg`);
    const cardThumbnail2 = new MessageAttachment(`./images/${Client.heroCards[cardIndex].thumbnailB}`);
    const embed2 = new MessageEmbed()
      .setColor(Client.heroCards[cardIndex].diceColor)
      .setAuthor(Client.heroCards[cardIndex].hero)
      .setTitle(`${Client.heroCards[cardIndex].titleB}`)
      .setDescription(`${Client.heroCards[cardIndex].cardTypeB} \n\u200b`)
      .addFields({
        name:'Cost:',
        value: `**${Client.heroCards[cardIndex].costB}** <:cp_icon:876984072654684200>`,
        inline: true
      }, {
        name:'Location:',
        value: `${Client.heroCards[cardIndex].locationB} \n\u200b`,
        inline: true
      }, {
        name:'Activation Requirement:',
        value: `${Client.heroCards[cardIndex].reqB} \n\u200b`
      }, {
        name:'2nd Ability:',
        value: `**${Client.heroCards[cardIndex].titleB2}** \n\u200b`
      }, {
        name:'Activation Requirement:',
        value: `${Client.heroCards[cardIndex].reqB2} \n\u200b`
      },{
        name:'Ability Description:',
        value: `${Client.heroCards[cardIndex].textB2}`
      })
      .setImage(`attachment://${Client.heroCards[cardIndex].cardIdB}.jpg`)
      .setThumbnail(`attachment://${Client.heroCards[cardIndex].thumbnailB}`)
    await interaction.followUp({
      embeds: [embed2],
      files: [cardImage2, cardThumbnail2]
    });
  } catch (err) {
    console.log(err);
  }
  try {
    const cardImage3 = new MessageAttachment(`./images/${Client.heroCards[cardIndex].cardIdC}.jpg`);
    const cardThumbnail3 = new MessageAttachment(`./images/${Client.heroCards[cardIndex].thumbnailC}`);
    const embed3 = new MessageEmbed()
      .setColor(Client.heroCards[cardIndex].diceColor)
      .setAuthor(Client.heroCards[cardIndex].hero)
      .setTitle(`${Client.heroCards[cardIndex].titleC}`)
      .setDescription(`${Client.heroCards[cardIndex].cardTypeC} \n\u200b`)
      .addFields({
        name:'Cost:',
        value: `**${Client.heroCards[cardIndex].costC}** <:cp_icon:876984072654684200>`,
        inline: true
      }, {
        name:'Location:',
        value: `${Client.heroCards[cardIndex].locationC} \n\u200b`,
        inline: true
      }, {
        name:'Activation Requirement:',
        value: `${Client.heroCards[cardIndex].reqC} \n\u200b`
      }, {
        name:'Ability Description:',
        value: `${Client.heroCards[cardIndex].textC}`
      })
      .setImage(`attachment://${Client.heroCards[cardIndex].cardIdC}.jpg`)
      .setThumbnail(`attachment://${Client.heroCards[cardIndex].thumbnailC}`)
    await interaction.followUp({
      embeds: [embed3],
      files: [cardImage3, cardThumbnail3]
    });
  } catch (err) {
    console.log(err);
  }
  try {
    const cardImage3 = new MessageAttachment(`./images/${Client.heroCards[cardIndex].cardIdC}.jpg`);
    const cardThumbnail3 = new MessageAttachment(`./images/${Client.heroCards[cardIndex].thumbnailC}`);
    const embed3 = new MessageEmbed()
      .setColor(Client.heroCards[cardIndex].diceColor)
      .setAuthor(Client.heroCards[cardIndex].hero)
      .setTitle(`${Client.heroCards[cardIndex].titleC}`)
      .setDescription(`${Client.heroCards[cardIndex].cardTypeC} \n\u200b`)
      .addFields({
        name:'Cost:',
        value: `**${Client.heroCards[cardIndex].costC}** <:cp_icon:876984072654684200>`,
        inline: true
      }, {
        name:'Location:',
        value: `${Client.heroCards[cardIndex].locationC} \n\u200b`,
        inline: true
      }, {
        name:'Activation Requirement:',
        value: `${Client.heroCards[cardIndex].reqC} \n\u200b`
      }, {
        name:'Ability Description:',
        value: `${Client.heroCards[cardIndex].textC}\n\u200b`
      }, {
        name:'2nd Ability:',
        value: `**${Client.heroCards[cardIndex].titleC2}** \n\u200b`
      }, {
        name:'Activation Requirement:',
        value: `${Client.heroCards[cardIndex].reqC2} \n\u200b`
      },{
        name:'Ability Description:',
        value: `${Client.heroCards[cardIndex].textC2}`
      })
      .setImage(`attachment://${Client.heroCards[cardIndex].cardIdC}.jpg`)
      .setThumbnail(`attachment://${Client.heroCards[cardIndex].thumbnailC}`)
    await interaction.followUp({
      embeds: [embed3],
      files: [cardImage3, cardThumbnail3]
    });
  } catch (err) {
    console.log(err);
  }
}

async function cardEmbed123467(client, interaction, args, cardIndex) {
}

module.exports = {
 embedCreate
}



// async function cardEmbed136(client, interaction, args, cardIndex) {
//   const response = JSON.parse(args)
//   try {
//     const cardImage = new MessageAttachment(`./images/${Client.heroCards[cardIndex].cardId}.jpg`);
//     const cardThumbnail = new MessageAttachment(`./images/${Client.heroCards[cardIndex].thumbnail}`);
//     const embed = new MessageEmbed()
//       .setColor(Client.heroCards[cardIndex].diceColor)
//       .setAuthor(Client.heroCards[cardIndex].hero)
//       .setTitle(`${Client.heroCards[cardIndex].title}`)
//       .setDescription(`${Client.heroCards[cardIndex].cardType} \n\u200b`)
//       .addFields({
//         name:'Location:',
//         value: `${Client.heroCards[cardIndex].location} \n\u200b`,
//         inline: true
//       }, {
//         name:'Activation Requirement:',
//         value: `${Client.heroCards[cardIndex].req} \n\u200b`
//       }, {
//         name:'Ability Description:',
//         value: `${Client.heroCards[cardIndex].text}`
//       })
//       .setImage(`attachment://${Client.heroCards[cardIndex].cardId}.jpg`)
//       .setThumbnail(`attachment://${Client.heroCards[cardIndex].thumbnail}`)
//     await interaction.followUp({
//       embeds: [embed],
//       files: [cardImage, cardThumbnail]
//     });
//   } catch (err) {
//     console.log(err);
//   }
//   try {
//     const cardImage2 = new MessageAttachment(`./images/${Client.heroCards[cardIndex].cardIdB}.jpg`);
//     const cardThumbnail2 = new MessageAttachment(`./images/${Client.heroCards[cardIndex].thumbnailB}`);
//     const embed2 = new MessageEmbed()
//       .setColor(Client.heroCards[cardIndex].diceColor)
//       .setAuthor(Client.heroCards[cardIndex].hero)
//       .setTitle(`${Client.heroCards[cardIndex].titleB}`)
//       .setDescription(`${Client.heroCards[cardIndex].cardTypeB} \n\u200b`)
//       .addFields({
//         name:'Cost:',
//         value: `**${Client.heroCards[cardIndex].costB}** <:cp_icon:876984072654684200>`,
//         inline: true
//       }, {
//         name:'Location:',
//         value: `${Client.heroCards[cardIndex].locationB} \n\u200b`,
//         inline: true
//       }, {
//         name:'Activation Requirement:',
//         value: `${Client.heroCards[cardIndex].reqB} \n\u200b`
//       }, {
//         name:'Ability Description:',
//         value: `${Client.heroCards[cardIndex].textB} \n\u200b\n\u200b`
//       }, {
//         name:'2nd Ability:',
//         value: `**${Client.heroCards[cardIndex].titleB2}** \n\u200b`
//       }, {
//         name:'Activation Requirement:',
//         value: `${Client.heroCards[cardIndex].reqB2} \n\u200b`
//       },{
//         name:'Ability Description:',
//         value: `${Client.heroCards[cardIndex].textB2}`
//       })
//       .setImage(`attachment://${Client.heroCards[cardIndex].cardIdB}.jpg`)
//       .setThumbnail(`attachment://${Client.heroCards[cardIndex].thumbnailB}`)
//     await interaction.followUp({
//       embeds: [embed2],
//       files: [cardImage2, cardThumbnail2]
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }