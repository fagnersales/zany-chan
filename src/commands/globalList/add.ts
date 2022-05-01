import { SlashCommandSubcommandBuilder } from '@discordjs/builders'
import { animeNameOption } from './options/name'
import { animeDescriptionOption } from './options/description'
import { animeEpisodesOption } from './options/episodes'

export const addToGlobalList: SlashCommandSubcommandBuilder =
  new SlashCommandSubcommandBuilder()
  .setName('add')
  .setDescription('Adds an anime to the global list')
  .addStringOption(animeNameOption)
  .addStringOption(animeDescriptionOption)
  .addNumberOption(animeEpisodesOption)