const { REST, Routes } = require('discord.js');
require('dotenv').config();

const commands = [
  {
    name: 'contexto',
    description: 'Play Contexto daily game'
  }
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  await rest.put(
    Routes.applicationCommands(process.env.CLIENT_ID),
    { body: commands }
  );

  console.log('✅ Command registered');
})();