import { SlashCommandSubcommandBuilder } from '@discordjs/builders'
import { CommandInteraction } from 'discord.js'

import { globalListRepository } from '../../repositories/GlobalListRepository'

export const listGlobalList: SlashCommandSubcommandBuilder =
  new SlashCommandSubcommandBuilder()
    .setName('list')
    .setDescription('Lists all the anime in the global list')

export const executer = async (interaction: CommandInteraction) => {
  const subcommand = interaction.options.getSubcommand()

  if (subcommand !== listGlobalList.name) return;

  const animes = await globalListRepository.list()

  if (animes.length === 0) {
    interaction.reply('Não há animes na lista global!')
    return
  }

  const listNames = animes.map(anime => {
    return `**°** ${anime.name} (${anime.episodes} EPs)`
  })

  interaction.reply(`Lista de Animes:\n\n${listNames.join('\n')}`)
}