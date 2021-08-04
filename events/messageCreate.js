const client = require("../dicethrone.js");
const config = require("../config.json");

client.on("messageCreate", async (message) => {
    console.log("messageCreate.js -----------------------------------------------")
    if (
        message.author.bot ||
        !message.guild ||
        !message.content.toLowerCase().startsWith(config.prefix)
    )
        return;

    const [cmd, ...args] = message.content
        .slice(config.prefix.length)
        .trim()
        .split(" ");

    const command = client.commands.get(cmd.toLowerCase());

    if (!command) return;
    await command.run(client, message, args);
});