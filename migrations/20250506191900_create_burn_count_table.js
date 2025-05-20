/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("burn_count", (table) => {
    table.date("date").primary(); // one row per day
    table.integer("count").notNullable().defaultTo(1);
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("burn_count");
}
