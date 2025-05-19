/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  knex.schema.dropTableIfExists("resources").dropTableIfExists("videos").dropTableIfExists("articles");

  return knex.schema
    .createTable("articles", (table) => {
      table.increments("id").primary();
      table.string("title").notNullable();
      table.text("content").notNullable();
      table.integer("likes").notNullable().defaultTo(0);
    })
    .createTable("videos", (table) => {
      table.increments("id").primary();
      table.string("title").notNullable();
      table.text("description").notNullable();
    })
    .createTable("resources", (table) => {
      table.increments("id").primary();
      table
        .integer("article_id")
        .unsigned()
        .references("articles.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
        .nullable();
      table
        .integer("video_id")
        .unsigned()
        .references("videos.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
        .nullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table
        .timestamp("updated_at")
        .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema
    .dropTable("resources")
    .dropTable("videos")
    .dropTable("articles");
}
