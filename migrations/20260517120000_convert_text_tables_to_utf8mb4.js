/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  const tables = ["quotes", "reflections", "articles", "videos", "resources"];

  for (const table of tables) {
    const exists = await knex.schema.hasTable(table);

    if (exists) {
      await knex.raw(`ALTER TABLE ${table} CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`);
    }
  }
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  const tables = ["quotes", "reflections", "articles", "videos", "resources"];

  for (const table of tables) {
    const exists = await knex.schema.hasTable(table);

    if (exists) {
      await knex.raw(`ALTER TABLE ${table} CONVERT TO CHARACTER SET utf8 COLLATE utf8_unicode_ci`);
    }
  }
}
