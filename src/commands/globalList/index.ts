import { SlashCommandBuilder } from '@discordjs/builders'
import { RESTPostAPIApplicationCommandsJSONBody } from 'discord-api-types/v10'
import { CommandInteraction } from 'discord.js'
import { IAnime } from '../../utils/types'

import { addToGlobalList } from './add'
import { removeFromGlobalList } from './remove'

import { globalListRepository } from '../../repositories/GlobalListRepository'

export const commandBuilder = (): RESTPostAPIApplicationCommandsJSONBody => {
  return new SlashCommandBuilder()
    .setName('global')
    .setDescription('Manages all available animes')
    .addSubcommand(addToGlobalList)
    .addSubcommand(removeFromGlobalList)
    .toJSON()
}


export const commandExecuter = async (interaction: CommandInteraction) => {
  if (interaction.commandName !== 'global') return false;

  const subcommand = interaction.options.getSubcommand()

  if (subcommand === 'add') {
    const name = interaction.options.getString('name')!
    const episodes = interaction.options.getNumber('episodes')!
    const description = interaction.options.getString('description')!

    const anime: IAnime = {
      name,
      episodes,
      description,
      rate: 0,
      seasonsAmount: 1,
      tags: [],
      banners: []
    }

    await globalListRepository.save(anime)

    interaction.reply(`O Anime **${name}** foi adicionado com sucesso!`)
  }

  if (subcommand === 'remove') {
    const name = interaction.options.getString('name')!

    try {
      await globalListRepository.delete(name)
      interaction.reply(`O Anime **${name}** foi removido com sucesso!`)
    } catch {
      interaction.reply(`O Anime **${name}** não foi encontrado!`)
    }
  }
}