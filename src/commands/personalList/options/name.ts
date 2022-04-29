import { SlashCommandStringOption } from '@discordjs/builders'

export const animeNameOption = new SlashCommandStringOption()
    .setName('name')
    .setDescription('The name of the anime')
    .setRequired(true)