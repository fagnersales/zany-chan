import { SlashCommandBuilder } from '@discordjs/builders'
import { RESTPostAPIApplicationCommandsJSONBody } from 'discord-api-types/v10'
import { CommandInteraction } from 'discord.js'

import { addToPersonalList } from './add'
import { removeFromPersonalList } from './remove'

export const commandBuilder = (): RESTPostAPIApplicationCommandsJSONBody => {
  return new SlashCommandBuilder()
    .setName('personal')
    .setDescription('Manages your personal anime list')
    .addSubcommand(addToPersonalList)
    .addSubcommand(removeFromPersonalList)
    .toJSON()
}

export const commandExecuter = (interaction: CommandInteraction) => {
  if (interaction.commandName !== 'personal') return false;

  const subcommand = interaction.options.getSubcommand();

  if (subcommand === 'add') {
    interaction.reply(`personal add: ${interaction.options.getString('name')}`)
  }

  if (subcommand === 'remove') {
    interaction.reply(`personal remove: ${interaction.options.getString('name')}`)
  }
}