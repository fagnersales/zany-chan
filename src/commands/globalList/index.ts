import { SlashCommandBuilder } from '@discordjs/builders'
import { RESTPostAPIApplicationCommandsJSONBody } from 'discord-api-types/v10'
import { CommandInteraction } from 'discord.js'

import { addToGlobalList } from './add'
import { removeFromGlobalList } from './remove'

export const commandBuilder = (): RESTPostAPIApplicationCommandsJSONBody => {
  return new SlashCommandBuilder()
    .setName('global')
    .setDescription('Manages all available animes')
    .addSubcommand(addToGlobalList)
    .addSubcommand(removeFromGlobalList)
    .toJSON()
}


export const commandExecuter = (interaction: CommandInteraction) => {
  if (interaction.commandName !== 'global') return false;

  const subcommand = interaction.options.getSubcommand()

  if (subcommand === 'add') {
    interaction.reply(`global add: ${interaction.options.getString('name')}`)
  }

  if (subcommand === 'remove') {
    interaction.reply(`global remove: ${interaction.options.getString('name')}`)
  }
}