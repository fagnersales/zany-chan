import { SlashCommandSubcommandBuilder } from '@discordjs/builders'
import { animeNameOption } from './options/name'

export const addToGlobalList: SlashCommandSubcommandBuilder =
  new SlashCommandSubcommandBuilder()
  .setName('add')
  .setDescription('Adds an anime to the global list')
  .addStringOption(animeNameOption)