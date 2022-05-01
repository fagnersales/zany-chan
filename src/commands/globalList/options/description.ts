import { SlashCommandStringOption } from '@discordjs/builders'

export const animeDescriptionOption = new SlashCommandStringOption()
    .setName('description')
    .setDescription('Descrição do anime')
    .setRequired(true)