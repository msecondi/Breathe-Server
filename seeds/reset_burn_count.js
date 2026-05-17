/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

export async function seed(knex) {
  await knex("burn_count").del();

  await knex("burn_count").insert([
    {
      date: new Date().toISOString().slice(0, 10),
      count: 0,
    },
  ]);
}