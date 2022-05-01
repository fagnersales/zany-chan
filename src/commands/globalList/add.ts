import { SlashCommandSubcommandBuilder } from '@discordjs/builders'
import { animeNameOption } from './options/name'
import { animeDescriptionOption } from './options/description'
import { animeEpisodesOption } from './options/episodes'
import { CommandInteraction } from 'discord.js'
import { globalListRepository } from '../../repositories/GlobalListRepository'

export const addToGlobalList: SlashCommandSubcommandBuilder =
  new SlashCommandSubcommandBuilder()
    .setName('add')
    .setDescription('Adds an anime to the global list')
    .addStringOption(animeNameOption)
    .addStringOption(animeDescriptionOption)
    .addNumberOption(animeEpisodesOption)

export const executer = async (interaction: CommandInteraction) => {
  const subcommand = interaction.options.getSubcommand()

  if (subcommand !== addToGlobalList.name) return;

  const name = interaction.options.getString('name')!
  const description = interaction.options.getString('description')!
  const episodes = interaction.options.getNumber('episodes')!

  try {
    await globalListRepository.save({
      name,
      description,
      episodes,
      rate: 0,
      seasonsAmount: 1,
      tags: [],
      banners: []
    })

    interaction.reply(`O Anime **${name}** foi adicionado com sucesso!`)
  } catch {
    interaction.reply(`O Anime **${name}** não foi encontrado!`)
  }
}