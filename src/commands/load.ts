import { REST } from '@discordjs/rest'
import { RESTPostAPIApplicationCommandsJSONBody, Routes } from 'discord-api-types/v9'

export type ILoad = {
  token: string
  guildId: string
  clientId: string
  builders: RESTPostAPIApplicationCommandsJSONBody[]
}

export const load = async (data: ILoad) => {
  const rest = new REST({ version: '9' }).setToken(data.token)
  try {
    console.log('Started refreshing application (/) commands.')

    await rest.put(
      Routes.applicationGuildCommands(data.clientId, data.guildId),
      { body: data.builders },
    )

    console.log('Successfully reloaded application (/) commands.')
  } catch (error) {
    console.error(error)
  }
}