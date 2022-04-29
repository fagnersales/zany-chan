import { SlashCommandSubcommandBuilder } from '@discordjs/builders'
import { animeNameOption } from './options/name'

export const removeFromGlobalList: SlashCommandSubcommandBuilder =
  new SlashCommandSubcommandBuilder()
  .setName('remove')
  .setDescription('Removes an anime from the global list')
  .addStringOption(animeNameOption)