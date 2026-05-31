/**
 * Adds reflection_mode to existing reflection rows.
 *
 * Why this migration exists:
 * The original reflections table only stored name, message, and timestamps.
 * Breathe now needs to know what kind of reflection was submitted:
 * neutral, release, replenish, or absorb.
 */

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  // Step 1:
  // Add the new column to the existing reflections table.
  // We give it a default of "neutral" so new rows have a safe fallback.
  // At this point, we are not making it notNullable yet because old rows already exist.
  await knex.schema.alterTable("reflections", (table) => {
    table.string("reflection_mode").defaultTo("neutral");
  });

  // Step 2:
  // Backfill existing rows.
  // Any reflection that currently has no reflection_mode gets set to "neutral".
  // This protects old data before we make the column required.
  await knex("reflections")
    .whereNull("reflection_mode")
    .update({ reflection_mode: "neutral" });

  // Step 3:
  // Tighten the column after old rows have been safely updated.
  // From now on, every reflection must have a reflection_mode.
  // The default stays "neutral" for future inserts that do not provide a mode.
  await knex.schema.alterTable("reflections", (table) => {
    table.string("reflection_mode").notNullable().defaultTo("neutral").alter();
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  // Reverse the migration.
  // If this migration is rolled back, remove reflection_mode from reflections.
  await knex.schema.alterTable("reflections", (table) => {
    table.dropColumn("reflection_mode");
  });
}