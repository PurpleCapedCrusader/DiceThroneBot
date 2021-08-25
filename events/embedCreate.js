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
  if ( response.embedType === 1 ) {
    cardEmbed1(client, interaction, args)
  } else if ( response.embedType === 12 ) {
    cardEmbed12(client, interaction, args)
  } else if ( response.embedType === 123 ) {
    cardEmbed123(client, interaction, args)
  } else if ( response.embedType === 124 ) {
    cardEmbed124(client, interaction, args)
  } else if ( response.embedType === 1245 ) {
    cardEmbed1245(client, interaction, args)
  } else if ( response.embedType === 12345 ) {
    cardEmbed12345(client, interaction, args)
  } else if ( response.embedType === "basic" ) {
    cardEmbedBasic(client, interaction, args)
  }
}

function customEmoji(interaction, emojiName) {
    const thisEmoji = interaction.guild.emojis.cache.find(
      (emoji) => emoji.name === emojiName)
    return thisEmoji;
}

// function customEmojiDecoder(interaction, emojiName) {
//   customEmoji(interaction, emojiName)
//     .then((results) => {
//       thisEmoji = results;
//     })
//   console.log(`thisEmoji = ${thisEmoji}`)
//   return thisEmoji;
// }

async function cardEmbedBasic(user, interaction, args) {
  try {
    const response = JSON.parse(args)
    const cardImage = new MessageAttachment(`./images/${response.cardId}.jpg`);
    const cardThumbnail = new MessageAttachment(`./images/poison_token.gif`);
    // const cardThumbnail = new MessageAttachment(`./images/Apollo.jpg`);
    const embed = new MessageEmbed()
      .setColor(Client.heroCards[response.arrayNumber].diceColor)
      .setAuthor(Client.heroCards[response.arrayNumber].hero)
      .setTitle(`${Client.heroCards[response.arrayNumber].title}`)
      .setDescription(`${Client.heroCards[response.arrayNumber].cardType} \n\u200b`)
      .addFields({
      //   name: 'Phase:',
      //   value: `${Client.heroCards[response.arrayNumber].cardType}`,
      //   inline: true
      // }, {
      //   name: '\u200B',
      //   value: '\u200B'
      // }, {
        name:'Cost:',
        value: `**${Client.heroCards[response.arrayNumber].cost}** <:cp_icon:876984072654684200>`,
        inline: true
      }, {
        name:'Location:',
        value: `${Client.heroCards[response.arrayNumber].location}`,
        inline: true
      }, {
        name:'Action:',
        value: `${Client.heroCards[response.arrayNumber].text}`
      })
      .setImage(`attachment://${response.cardId}.jpg`)
      .setThumbnail('attachment://poison_token.gif')
      // .setTimestamp()
      // .setFooter('Some footer text here', 'https://i.imgur.com/AfFp7pu.png');

    await interaction.followUp({
      embeds: [embed],
      files: [cardImage, cardThumbnail]
    });
  } catch (err) {
    console.log(err);
  }
}

async function cardEmbed1(user, interaction, args) {
  try {
    const response = JSON.parse(args)
    const cardImage = new MessageAttachment(`./images/${response.cardId}.jpg`);
    const cardThumbnail = new MessageAttachment(`./images/poison_token.gif`);
    // const cardThumbnail = new MessageAttachment(`./images/Apollo.jpg`);
    const embed = new MessageEmbed()
      .setColor(Client.heroCards[response.arrayNumber].diceColor)
      .setAuthor(Client.heroCards[response.arrayNumber].hero)
      .setTitle(`${Client.heroCards[response.arrayNumber].title} \n\u200b`)
      // .setDescription(`${Client.heroCards[response.arrayNumber].cardType} \n\u200b`)
      .addFields({
        name: 'Phase:',
        value: `${Client.heroCards[response.arrayNumber].cardType}`,
        inline: true
      }, {
      //   name: '\u200B',
      //   value: '\u200B',
      //   inline: true
      // }, {
        name:'Cost:',
        value: `**${Client.heroCards[response.arrayNumber].cost}** <:cp_icon:876984072654684200>`,
        inline: true
      }, {
      //   name: '\u200B',
      //   value: '\u200B',
      //   inline: true
      // }, {
        name:'Location:',
        value: `${Client.heroCards[response.arrayNumber].location}\n\u200b`,
        inline: true
      })
      .addFields({
        name:'Action:',
        value: `${Client.heroCards[response.arrayNumber].text}`,
        inline: true
      })
      .setImage(`attachment://${response.cardId}.jpg`)
      .setThumbnail('attachment://poison_token.gif')
      .setTimestamp()
      .setFooter('Some footer text here', 'https://i.imgur.com/AfFp7pu.png');

    await interaction.followUp({
      embeds: [embed],
      files: [cardImage, cardThumbnail]
    });
  } catch (err) {
    console.log(err);
  }
}

async function cardEmbed12(client, interaction, args) {
  try {
    const response = JSON.parse(args)
    const cardImage = new MessageAttachment(`./images/${response.cardId}.jpg`);
    const cardThumbnail = new MessageAttachment(`./images/poison_token.gif`);
    // const cardThumbnail = new MessageAttachment(`./images/Apollo.jpg`);
    const embed = new MessageEmbed()
      .setColor(Client.heroCards[response.arrayNumber].diceColor)
      .setAuthor(Client.heroCards[response.arrayNumber].hero)
      .setTitle(Client.heroCards[response.arrayNumber].title)
      .setDescription(`${Client.heroCards[response.arrayNumber].cardType} \n\u200b`)
      .addFields({
        name:'Cost',
        value: `**${Client.heroCards[response.arrayNumber].cost}** <:cp_icon:876984072654684200>\n\u200b`,
        inline: true
      }, {
        name: 'Card Text 1',
        value: `${Client.heroCards[response.arrayNumber].text}`,
        inline: true
      }, {
        name: 'Inline field title 3',
        value: 'Some value here',
        inline: true
      }, )
      .addFields({
        name:'Card Text',
        value: `${Client.heroCards[response.arrayNumber].text}`
      }, {
        name: '\u200B',
        value: '\u200B'
      }, {
        name: 'Card Text 1',
        value: `${Client.heroCards[response.arrayNumber].text}`,
        inline: true
      }, {
        name: 'Inline field title 3',
        value: 'Some value here',
        inline: true
      }, )
      .addField('Inline field title 3', 'Some value here', true)
      .setImage(`attachment://${response.cardId}.jpg`)
      .setThumbnail('attachment://poison_token.gif')
      .setTimestamp()
      .setFooter('Some footer text here', 'https://i.imgur.com/AfFp7pu.png');

    await interaction.followUp({
      embeds: [embed],
      files: [cardImage, cardThumbnail]
    });
  } catch (err) {
    console.log(err);
  }
}

async function cardEmbed123(client, interaction, args) {
  console.log("123")
  const response = JSON.parse(args)
  await interaction.followUp(`card = ${response.cardId} embedType = ${response.embedType}`);
}

async function cardEmbed124(client, interaction, args) {
  console.log("124")
  const response = JSON.parse(args)
  await interaction.followUp(`card = ${response.cardId} embedType = ${response.embedType}`);
}

async function cardEmbed1245(client, interaction, args) {
  console.log("1245")
  const response = JSON.parse(args)
  await interaction.followUp(`card = ${response.cardId} embedType = ${response.embedType}`);
}

async function cardEmbed12345(client, interaction, args) {
  console.log("12345")
  const response = JSON.parse(args)
  await interaction.followUp(`card = ${response.cardId} embedType = ${response.embedType}`);
}

// async function embedCreate(card, embedType) {
//         var arrayLength = godArray.length;
//         for (var i = 0; i < arrayLength; i++) {
//           if (godArray[i] == lowerCase(args[0])) {
//             var godSearched = godArray.indexOf(lowerCase(args[0]));
//             if (bot.godData[godSearched].update == "Updated") {
//               const embed = new Discord.MessageEmbed()
//                 .attachFiles([
//                   "../ErisBot/images/" +
//                     bot.godData[godSearched].imageName +
//                     ".jpg",
//                 ])
//                 .attachFiles([
//                   "../ErisBot/images/" +
//                     bot.godData[godSearched].imageName +
//                     "_card.jpg",
//                 ])
//                 .setColor("0x" + bot.godData[godSearched].borderColor)
//                 .addField(
//                   bot.godData[godSearched].name,
//                   bot.godData[godSearched].title + "\n\u200b"
//                 )
//                 .addField(
//                   "Ability(updated):",
//                   bot.godData[godSearched].updatedAbilityFormatted + "\n\u200b"
//                 )
//                 .addField(
//                   "Ability(original):",
//                   bot.godData[godSearched].originalAbilityFormatted + "\n\u200b"
//                 )
//                 .addFields(
//                   { name:"Character Category:", value: bot.godData[godSearched].group, inline: true },
//                   { name:"App Availability:", value: bot.godData[godSearched].inAppPurchase, inline: true },
//                   { name: '\u200B', value: '\u200B' },
//                   { name:"Banned Opponents:", value: bot.godData[godSearched].banned, inline: true },
//                   { name:"Compatible with:", value:  bot.godData[godSearched].compatability, inline: true },
//                 )
//                 .setImage("attachment://" + bot.godData[godSearched].imageName + "_card.jpg")
//                 .setThumbnail(
//                   "attachment://" + bot.godData[godSearched].imageName + ".jpg"
//                 );
//               message.channel.send(embed).catch(console.error);
//               break;
//                 }
//             }
//         }
//     };

module.exports = {
 embedCreate
}