const { 
  Client, 
  GatewayIntentBits, 
  ActionRowBuilder, 
  ButtonBuilder, 
  ButtonStyle,
  EmbedBuilder
} = require('discord.js');

require('dotenv').config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once('ready', () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'contexto') {

    const button = new ButtonBuilder()
      .setLabel('▶ PLAY NOW')
      .setStyle(ButtonStyle.Link) // only option for external link
      .setURL('https://contexto.me');

    const row = new ActionRowBuilder().addComponents(button);

    const embed = new EmbedBuilder()
      .setTitle('🧠 Contexto Daily Game')
      .setDescription('Guess the secret word using AI similarity!\nClick below to start playing.')
      .setColor(0xFF0000); // THIS can be red

    await interaction.reply({
      embeds: [embed],
      components: [row]
    });
  }
});

client.login(process.env.TOKEN);