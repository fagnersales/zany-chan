import { SlashCommandSubcommandBuilder } from '@discordjs/builders'
import { CommandInteraction } from 'discord.js'
import { globalListRepository } from '../../repositories/GlobalListRepository'
import { animeNameOption } from './options/name'

export const removeFromGlobalList: SlashCommandSubcommandBuilder =
  new SlashCommandSubcommandBuilder()
    .setName('remove')
    .setDescription('Removes an anime from the global list')
    .addStringOption(animeNameOption)

export const executer = async (interaction: CommandInteraction) => {
  const subcommand = interaction.options.getSubcommand()

  if (subcommand !== removeFromGlobalList.name) return;

  const name = interaction.options.getString('name')!

  try {
    await globalListRepository.delete(name)
    interaction.reply(`O Anime **${name}** foi removido com sucesso!`)
  } catch {
    interaction.reply(`O Anime **${name}** não foi encontrado!`)
  }
}