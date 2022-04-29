import { SlashCommandSubcommandBuilder } from '@discordjs/builders'
import { animeNameOption } from './options/name'

export const removeFromPersonalList: SlashCommandSubcommandBuilder =
  new SlashCommandSubcommandBuilder()
  .setName('remove')
  .setDescription('Removes an anime from your personal list')
  .addStringOption(animeNameOption)