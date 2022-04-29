import { SlashCommandSubcommandBuilder } from '@discordjs/builders'

import { animeNameOption } from './options/name'
import { animeEpisodeOption } from './options/episode'
import { animeRateOption } from './options/rate'

export const addToPersonalList: SlashCommandSubcommandBuilder =
  new SlashCommandSubcommandBuilder()
  .setName('add')
  .setDescription('Adds an anime to your personal list')
  .addStringOption(animeNameOption)
  .addNumberOption(animeEpisodeOption)
  .addNumberOption(animeRateOption)