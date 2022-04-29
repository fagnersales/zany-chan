import { SlashCommandNumberOption } from '@discordjs/builders'

export const animeEpisodeOption = new SlashCommandNumberOption()
    .setName('episode')
    .setDescription('The episode you are in')
    .setRequired(true)