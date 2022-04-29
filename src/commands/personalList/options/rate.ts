import { SlashCommandNumberOption } from '@discordjs/builders'

export const animeRateOption = new SlashCommandNumberOption()
  .setName('rate')
  .setDescription('How would you rate this anime')
  .addChoices(
    { name: 'Thinking', value: 0 },
    { name: 'Very bad', value: 1 },
    { name: 'Bad', value: 2 },
    { name: 'So-so', value: 3 },
    { name: 'Good', value: 4 },
    { name: 'Great', value: 5 },
    { name: 'Very good', value: 6 },
    { name: 'Awesome', value: 7 },
    { name: 'Unbelievable', value: 8 },
    { name: 'Perfect', value: 9 },
    { name: 'Masterpiece', value: 10 }
  )
  .setRequired(true)