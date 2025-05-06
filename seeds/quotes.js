/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('quotes').del();
  await knex('quotes').insert([
    {
      id: 1,
      author: 'Albert Einstein',
      content: 'You cannot hope to build a better world without improving the individuals.'
    },
    {
      id: 2,
      author: 'Lao Tzu',
      content: 'When you realize nothing is lacking, the whole world belongs to you.'
    },
    {
      id: 3,
      author: 'Abraham Lincoln',
      content: "In the end, it's not the years in your life that count. It's the life in your years."
    },
    {
      id: 4,
      author: 'Marcus Aureulius',
      content: 'It is not death that a man should fear, but never beginning to live.'
    },
    {
      id: 5,
      author: 'Buddha',
      content: 'Be where you are; otherwise you will miss your life.'
    },
    {
      id: 6,
      author: 'Benjamin Franklin',
      content: 'Most men die at 25… we just don’t bury them until they are 70.'
    },
  ]);
};