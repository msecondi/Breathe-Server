/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("introspective", (table) => {
    table.increments("id").primary();
    table.date("date").notNullable(); // store the date of the reflection -- to be used on frontend to see how many reflections were made TODAY
    table.timestamp("created_at").defaultTo(knex.fn.now()); // optional: for tracking exact time if ever needed
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("introspective");
}
