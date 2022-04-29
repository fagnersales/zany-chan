import { Client } from 'discord.js'

const client = new Client({
  intents: [
    'GUILDS'
  ],
  allowedMentions: {
    parse: ['users']
  }
})

client.once('ready', (readyClient) => {
  const invite = readyClient.generateInvite({
    permissions: ['USE_APPLICATION_COMMANDS', 'ADMINISTRATOR'],
    scopes: ['bot', 'applications.commands']
  })

  console.log(invite)
})

export { client }