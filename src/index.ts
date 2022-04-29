import 'dotenv/config'

import { client } from './structures/Client'
import { load } from './commands/load'

import { builders, executers } from './commands/list'

client.on('interactionCreate', (interaction) => {
  if (!interaction.isCommand()) return

  executers(interaction)
})
 
client.login(process.env.TOKEN)
  .then(() => {
    load({
      token: process.env.TOKEN!,
      guildId: process.env.GUILD_ID!,
      clientId: process.env.CLIENT_ID!,
      builders: builders
    })
  })