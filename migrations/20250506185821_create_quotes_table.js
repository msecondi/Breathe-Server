/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema
      .createTable("quotes", (table) => {
        table.increments("id").primary();
        table.string("author").notNullable();
        table.string("content", 1000).notNullable();
      })
  }
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export function down(knex) {
    return knex.schema.dropTable("quotes");
  }