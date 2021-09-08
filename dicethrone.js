// trouble connecting database
const { Client, Collection, Intents } = require("discord.js");
const config = require("./config.json");
const dbCreds = require("./dbCreds.js");
const pkg = require("./package.json");
const activityStatus = require("./activityStatus.js");
const check = require("check-types");
const databaseCheck = require("./databaseBuilder.js");
const { lowerCase } = require("lower-case");
const diceThroneReactions = require("./diceThroneReactions.js");
const fs = require("fs");
const _ = require("lodash");
const PREFIX = config.prefix;
const { Pool } = require("pg");
const standardResponse = require("./standardResponse.js");
// const { version } = require("os");
const pool = new Pool(dbCreds);
const client = new Client({ intents: 32767 });

module.exports = client;
client.commands = new Collection();
client.slashCommands = new Collection();
require("./handler")(client);

// Link to hero data
client.heroCards = require("./heroCards.json")
client.dataIndex = require("./dataIndex.js");
client.standardResponse = require("./standardResponse.js");
const heroArray = client.dataIndex.allHeroesIndex;

// Ready statement
client.once("ready", async () => {
  console.log(
    `${getTimeStamp()} :: DiceThroneBot is ready to serve on ${
      client.guilds.cache.size
    } servers, for ${client.users.cache.size} users.`
  );
  console.log(client.heroCards["1"].title)
  updateStatus();
  adminNotify(`DiceThroneBot version ${pkg.version} started: ${getTimeStamp()}`);
  databaseCheck.createSchemaIfNotExist;
});

// error catch-all
client.on("error", (err) => console.error(`${getTimeStamp()} :: ${err}`));
client.on("warn", (err) => console.warn(`${getTimeStamp()} :: ${err}`));
client.on("debug", (err) => console.info(`${getTimeStamp()} :: ${err}`));



setInterval(function () {
  updateStatus();
}, 900000); // 60000 = 1min

client.on("guildMemberAdd", (member) => {
  standardResponse.welcome(member)
});

// Main Args/Response
client.on('messageCreate', (message) => {
  // console.log(`message = ${JSON.stringify(message)}`)
  if (!message.author.bot) {
    if (message.channel.type === "DM") {
      dmArchive(message);
    } else {
      messageArchive(message);
    }
  }
  // console.log(`MESSAGE = ${ message.channel.type }`)
  // react with emojis for mentioned gods
  if (
    message.channel.type != "DM" &&
    message.guild.id === config.guildId &&
    !message.author.bot
  ){
    try {
      console.log(`NEW MESSAGE = ${ message }`)
      let messageArray = (message.content)
      .replace(/'s+/g, ` `)
      .replace(/[\.,-\/#!$%\^&\*;":{}=\-_`\'\\~()@\+\?><\[\]\+]/g, '')
      .replace(/\s+/g, ' ')
      .replace(/\n+/g, ' ')
      .toLowerCase()
      .trim()
      .split(/ +/g);
      var emojiNamesInMessage = _.intersection(
        messageArray,
        diceThroneReactions.diceThroneReactionsArray
      );
      // console.log(`emojis = ${ JSON.stringify(message.guild.emojis.cache) }`)
      for (let i = 0; i < emojiNamesInMessage.length; i++) {
        const reactionEmoji = message.guild.emojis.cache.find(
          (emoji) => emoji.name === emojiNamesInMessage[i]
        );
        message.react(reactionEmoji);
      }
    } catch (err) {
      dmError(err);
    }
  }
  if (toString(!message.content).startsWith(PREFIX) || message.author.bot) {
    return;
  }
  // console.log(`content = ${message.content}`)
  // console.log(`DIDN'T RETURN`)
  // Add God Role (remove old god role if exists)
  if (message.content.slice(0, 4).toLowerCase() === "!iam") {
    if (message.channel.name === "dicethrone-bot") {
      let lastLetter = message.content.length;
      let roleRequested = message.content.slice(4, lastLetter).toLowerCase();

      if (roleRequested.slice(0, 6) === "castor") {
        roleRequested = "castor & pollux";
      }

      if (roleRequested.slice(0, 6) === "europa") {
        roleRequested = "europa & talus";
      }

      if (
        message.guild.roles.cache.some((r) => roleRequested.includes(r.name))
      ) {
        if (
          message.member.roles.cache.some((r) => roleRequested.includes(r.name))
        ) {
          // has one of the roles
          let member = message.member;
          const getGodRole = member.roles.cache.find((role) =>
            roleRequested.includes(role.name)
          ); //get name of current God Role
          member.roles.remove(getGodRole).catch(console.error);
          message.channel.send(
            message.author.username +
              " has left the " +
              roleRequested +
              " role group."
          );
        } else {
          let member = message.member;
          const getGodRole = message.guild.roles.cache.find((role) =>
            roleRequested.includes(role.name)
          );
          member.roles.add(getGodRole).catch(console.error);
          message.channel.send(
            message.author.username +
              " has joined the " +
              roleRequested +
              " role group."
          );
        }
      } else {
        message.channel.send(
          roleRequested +
            " isn't a role. Please check the spelling and try again."
        );
      }
    } else {
      message.channel.send(
        "Head over to the #dicethrone-bot channel for role updates."
      );
    }
  }

  let args = message.content.substring(PREFIX.length).split(/ +/g);

  if (
    heroArray.indexOf(lowerCase(args[0])) >= 0 ||
    heroArray.indexOf(lowerCase(args[0])) <= heroArray.length
  ) {
    args[0] = lowerCase(args[0]);
    if (args[0].slice(0, 6) === "castor") {
      args[0] = "castorandpollux";
    }

    if (args[0].slice(0, 6) === "europa") {
      args[0] = "europaandtalus";
    }

    switch (args[0]) {

      case "help":
      case "invite":
        //calls method from standardResponse.js where args[0] is the method name
        standardResponse[`${args[0]}`](message);  
      break;

      case "❤️":
        if (message.channelType === "DM") {
          message.channel
            .send(`This command doesn't work as a DM.`)
            .catch(console.error);
        }
        if (message.channel.type === "text") {
          const args = message.content
            .slice(PREFIX.length)
            .toLowerCase()
            .trim()
            .split(/ +/g);
          var roleRequested = "DiceThroneBot Loves";
          var durationRequested = 60;
          setTempOnlineRole(durationRequested, message, roleRequested);
          message.channel.send("Awww, a ❤️. How sweet!!").catch(console.error);
        }
        break;

      case "notifyoff":
        if (message.channel.name === "eris-bot") {
          var role = message.guild.roles.cache.find(
            (r) => r.name === "Online Notify"
          );
          message.member.roles.remove(role).catch(console.error);
        } else {
          message.channel.send(
            `That command only works in the #eris-bot channel.`
          );
        }
        break;

      case "notifyon":
        if (message.channel.name === "eris-bot") {
          var role = message.guild.roles.cache.find(
            (r) => r.name === "Online Notify"
          );
          message.member.roles.add(role).catch(console.error);
        } else {
          message.channel.send(
            `That command only works in the #eris-bot channel.`
          );
        }
        break;

      case "notinapp":
      var embed = new Discord.MessageEmbed().addField(
        `**Gods not currently in the app**`,
        `Chaos\n\u200b` +
          `Circe\n\u200b` +
          `Hecate\n\u200b` +
          `Hydra\n\u200b` +
          `Moerae\n\u200b` +
          `Nyx\n\u200b` +
          `Tartarus\n\u200b` +
          `Tyche`
      );
      message.channel.send(embed).catch(console.error);
      break;

      case "rules":
        standardResponse.rules(message);
      break;

      case "update-info": // todo: make this response a DM back to the author
      var arrayLength = heroArray.length;
      for (var i = 0; i < arrayLength; i++) {
        if (client.godData[i].update == "Updated") {
          const embed = new Discord.MessageEmbed()
            .attachFiles([
              "../ErisBot/images/" + client.godData[i].imageName + ".jpg",
            ])
            .setColor("0x" + client.godData[i].borderColor)
            .addField(client.godData[i].name, client.godData[i].title + "\n\u200b")
            .addField(
              "Ability(updated):",
              client.godData[i].updatedAbilityFormatted + "\n\u200b"
            )
            .addField(
              "Ability(original):",
              client.godData[i].originalAbilityFormatted + "\n\u200b"
            )
            .addField("Banned Opponents:", client.godData[i].banned + "\n\u200b")
            .addField(
              "Character Category:",
              client.godData[i].group + "\n\u200b"
            )
            .addField(
              "App Availability:",
              client.godData[i].inAppPurchase + "\n\u200b"
            )
            .addField("Compatible with", client.godData[i].compatability)
            .setThumbnail(
              "attachment://" + client.godData[i].imageName + ".jpg"
            );
          message.author.send(embed).catch(console.error);
        }
      }
      break;

      case "update-list":
      var embed = new Discord.MessageEmbed().addField(
        "**Ability text changes.**",
        "There are several characters with updated ability text. " +
          "This list only includes characters with an ability text change that affects gameplay. \n\u200b" +
          "1. Adonis \n\u200b" +
          "2. Aeolus \n\u200b" +
          "3. Bia \n\u200b" +
          "4. Charybdis \n\u200b" +
          "5. Graeae \n\u200b" +
          "6. Heracles \n\u200b" +
          "7. Jason \n\u200b" +
          "8. Limus \n\u200b" +
          "9. Medea \n\u200b" +
          "10. Nemesis \n\u200b" +
          "11. Proteus \n\u200b" +
          "12. Siren \n\u200b \n\u200b" +
          `Use **!update-info** and I'll send you a DM with all of the information for each of these characters`
      );
      message.channel.send(embed).catch(console.error);
      break;

      case "win":
      var embed = new Discord.MessageEmbed().addField(
        "**Winning the Game**",
        "If one of your Workers moves up on top of level 3 during your turn, you instantly win! \n\u200b \n\u200b You must always perform a move then build on your turn. If you are unable to, you lose."
      );
      message.channel.send(embed).catch(console.error);
      break;

      // HERO, TOKEN, and DICE INFO - MUST GO LAST BECAUSE IT TAKES ALL CASES
      case args[0]:
        var arrayLength = heroArray.length;
        for (var i = 0; i < arrayLength; i++) {
          if (heroArray[i] == lowerCase(args[0])) {
            var godSearched = heroArray.indexOf(lowerCase(args[0]));
            if (client.godData[godSearched].update == "Updated") {
              const embed = new Discord.MessageEmbed()
                .attachFiles([
                  "../ErisBot/images/" +
                    client.godData[godSearched].imageName +
                    ".jpg",
                ])
                .attachFiles([
                  "../ErisBot/images/" +
                    client.godData[godSearched].imageName +
                    "_card.jpg",
                ])
                .setColor("0x" + client.godData[godSearched].borderColor)
                .addField(
                  client.godData[godSearched].name,
                  client.godData[godSearched].title + "\n\u200b"
                )
                .addField(
                  "Ability(updated):",
                  client.godData[godSearched].updatedAbilityFormatted + "\n\u200b"
                )
                .addField(
                  "Ability(original):",
                  client.godData[godSearched].originalAbilityFormatted + "\n\u200b"
                )
                .addFields(
                  { name:"Character Category:", value: client.godData[godSearched].group, inline: true },
                  { name:"App Availability:", value: client.godData[godSearched].inAppPurchase, inline: true },
                  { name: '\u200B', value: '\u200B' },
                  { name:"Banned Opponents:", value: client.godData[godSearched].banned, inline: true },
                  { name:"Compatible with:", value:  client.godData[godSearched].compatability, inline: true },
                )
                .setImage("attachment://" + client.godData[godSearched].imageName + "_card.jpg")
                .setThumbnail(
                  "attachment://" + client.godData[godSearched].imageName + ".jpg"
                );
              message.channel.send(embed).catch(console.error);
              break;
            } else if (client.godData[godSearched].update == "Same") {
              const embed = new Discord.MessageEmbed()
              .attachFiles([
                "../ErisBot/images/" +
                  client.godData[godSearched].imageName +
                  ".jpg",
              ])
              .attachFiles([
                "../ErisBot/images/" +
                  client.godData[godSearched].imageName +
                  "_card.jpg",
              ])
              .setColor("0x" + client.godData[godSearched].borderColor)
              .addField(
                client.godData[godSearched].name,
                client.godData[godSearched].title + "\n\u200b"
              )
              .addField(
                "Ability:",
                client.godData[godSearched].originalAbilityFormatted + "\n\u200b"
              )
              .addFields(
                { name:"Character Category:", value: client.godData[godSearched].group, inline: true },
                // { name: '\u200B', value: '\u200B' },
                { name:"App Availability:", value: client.godData[godSearched].inAppPurchase, inline: true },
                { name: '\u200B', value: '\u200B' },
                { name:"Banned Opponents:", value: client.godData[godSearched].banned, inline: true },
                { name:"Compatible with:", value:  client.godData[godSearched].compatability, inline: true },
              )
              .setImage("attachment://" + client.godData[godSearched].imageName + "_card.jpg")
              .setThumbnail(
                "attachment://" + client.godData[godSearched].imageName + ".jpg"
              );
            message.channel.send(embed).catch(console.error);
            break;
            } else {
              break;
            }
          }
        }
    }
  } else {
    return;
  }
});

async function dmError(err) {
  try {
    const adminUser = client.users.fetch(`${config.adminId}`);
    (await adminUser).send(`ERROR: ${getTimeStamp()} :: ${err.stack}`);
    console.log(`ERROR: ${getTimeStamp()} :: ${err.stack}`);
  } catch (err) {
    console.log("ERROR in dmError(err)");
  }
}

async function adminNotify(msg) {
  try {
    //Admin user object for DM notifications
    const adminUser = client.users.fetch(`${config.adminId}`);
    (await adminUser).send(msg);
  } catch (err) {
    dmError(err);
  }
}

function getTimeStamp() {
  let now = new Date();
  return "[" + now.toLocaleString() + "]";
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  // While there remains elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

async function messageArchive(message) {
	const client = await pool.connect();
	try {
		const prepMessageArchive = {
			readable_timestamp: getTimeStamp(),
			guild_name: message.guild.name,
			guild_id: message.guild.id,
			channel_name: message.channel.name,
			channel_id: message.channel.id,
			message_id: message.id,
			author_id: message.author.id,
			author_username: message.author.username,
			member_nickname: message.member.nickname,
			message_timestamp: message.createdTimestamp,
			message_content: message.mentions._content,
		};
		await client.query("BEGIN");
		const insertMessageArchiveText =
			`INSERT INTO dicethrone_schema.message_archive(readable_timestamp, guild_name, guild_id, ` +
			`channel_name, channel_id, message_id, author_id, author_username, ` +
			`member_nickname, message_timestamp, message_content) ` +
			`VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`;
		const insertMessageArchiveValues = [
			prepMessageArchive.readable_timestamp,
			prepMessageArchive.guild_name,
			prepMessageArchive.guild_id,
			prepMessageArchive.channel_name,
			prepMessageArchive.channel_id,
			prepMessageArchive.message_id,
			prepMessageArchive.author_id,
			prepMessageArchive.author_username,
			prepMessageArchive.member_nickname,
			prepMessageArchive.message_timestamp,
			prepMessageArchive.message_content,
		];
		await client.query(
			insertMessageArchiveText,
			insertMessageArchiveValues
		);
		await client.query("COMMIT");
	} catch (err) {
		await client.query("ROLLBACK");
		dmError(err);
	} finally {
		client.release();
	}
}

async function dmArchive(message) {
	const client = await pool.connect();
	try {
		const prepDmArchive = {
			readable_timestamp: getTimeStamp(),
			author_username: message.author.username,
			author_id: message.author.id,
			message_timestamp: message.createdTimestamp,
			message_content: message.content,
		};
		await client.query("BEGIN");
		const insertDmArchiveText =
			`INSERT INTO dicethrone_schema.dm_archive(readable_timestamp, author_username, ` +
			`author_id, message_timestamp, message_content) ` +
			`VALUES ($1, $2, $3, $4, $5)`;
		const insertDmArchiveValues = [
			prepDmArchive.readable_timestamp,
			prepDmArchive.author_username,
			prepDmArchive.author_id,
			prepDmArchive.message_timestamp,
			prepDmArchive.message_content,
		];
		await client.query(insertDmArchiveText, insertDmArchiveValues);
		await client.query("COMMIT");
	} catch (err) {
		await client.query("ROLLBACK");
		dmError(err);
	} finally {
		client.release();
	}
}

async function updateStatus() {
  try {
	var watchPlay = [0, 1, 2, 3, 4];
	shuffle(watchPlay);
	if (watchPlay[0] == 0 || watchPlay[0] == 1) {
		var statusArray = activityStatus.boardGames;
		var activityType = "PLAYING";
	} else if (watchPlay[0] == 2 || watchPlay[0] == 3) {
		var statusArray = activityStatus.movies;
		var activityType = "WATCHING";
	} else if (watchPlay[0] == 4) {
		var statusArray = activityStatus.songs;
		var activityType = "LISTENING";
	}
	shuffle(statusArray);
	client.user
		.setActivity(`${statusArray[0]}`, {
			type: activityType,
		})
		// .then((presence) =>
		// 	console.log(`${activityType} ${presence.activities[0].name}`)
		// )
  } catch(err) {
			dmError(err);
		};
}
// module.exports = {
//   dmError
//  }
// Super Secret Token!!!
client.login(config.token);
