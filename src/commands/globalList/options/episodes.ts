import { SlashCommandNumberOption } from '@discordjs/builders'

export const animeEpisodesOption = new SlashCommandNumberOption()
    .setName('episodes')
    .setDescription('Quantos episódios têm o anime')
    .setRequired(true)