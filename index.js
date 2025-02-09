const Discord = require('discord.js');
const client = new Discord.Client(
    {intents: ["GUILD_MESSAGES", "GUILD_VOICE_STATES", "GUILDS"]}
);

const config = require('./config.json');
const commands = require(`./bin/commands`);

//in case the bot was not configured properly
if(!config.PREFIX || !config.BOT_TOKEN) {
    console.error("Error: the configuration file was configured properly.");
    console.error("Make sure there are no spelling mistakes.");
    process.exit(1);
}

client.on('message', msg => {
    if (msg.content.startsWith(config.PREFIX)) {
        const commandBody = msg.content.substring(config.PREFIX.length).split(' ');
        const channelName = commandBody[1];
        if (commandBody[0] === ('enter')) commands.enter(msg, "coa-globalvc");
        if (commandBody[0] === ('exit')) commands.exit(msg);
    }
});

client.login(config.BOT_TOKEN);

client.on('ready', () => {
    console.log(`\nONLINE\n`);
});
