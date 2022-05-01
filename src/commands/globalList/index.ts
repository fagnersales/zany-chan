import { SlashCommandBuilder } from '@discordjs/builders'
import { RESTPostAPIApplicationCommandsJSONBody } from 'discord-api-types/v10'
import { CommandInteraction } from 'discord.js'

import {
  addToGlobalList,
  executer as addToGlobalListExecuter,
} from './add'

import {
  removeFromGlobalList,
  executer as removeFromGlobalListExecuter,
} from './remove'

export const commandBuilder = (): RESTPostAPIApplicationCommandsJSONBody => {
  return new SlashCommandBuilder()
    .setName('global')
    .setDescription('Manages all available animes')
    .addSubcommand(addToGlobalList)
    .addSubcommand(removeFromGlobalList)
    .toJSON()
}


export const commandExecuter = async (interaction: CommandInteraction) => {
  if (interaction.commandName !== 'global') return false;

  const executers = [
    addToGlobalListExecuter,
    removeFromGlobalListExecuter,
  ]

  executers.forEach(executer => executer(interaction))
}