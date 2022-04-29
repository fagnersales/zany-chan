import { RESTPostAPIApplicationCommandsJSONBody } from 'discord-api-types/v9'
import { CommandInteraction } from 'discord.js'

import {
  commandBuilder as personalListCommandBuilder,
  commandExecuter as personalListCommandExecuter
} from './personalList'

import { 
  commandBuilder as globalListCommandBuilder,
  commandExecuter as globalListCommandExecuter
} from './globalList'

export const builders: RESTPostAPIApplicationCommandsJSONBody[] = [
  personalListCommandBuilder(),
  globalListCommandBuilder()
]

export const executers = (interaction: CommandInteraction) => {
  const commandExecuters = [
    personalListCommandExecuter,
    globalListCommandExecuter
  ]

  commandExecuters.forEach(executer => {
    const result = executer(interaction)

    if (result !== false) return true
  })

}