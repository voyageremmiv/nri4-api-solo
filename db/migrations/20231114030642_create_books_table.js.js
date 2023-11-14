/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("books", function (table) {
    table.increments("id").primary(); // Set this column as the primary key
    table.string("title", 64).notNullable();
    table.string("author", 64).notNullable();
    table.integer("year").notNullable();
    table.integer("positiveReview").notNullable();
    table.integer("negativeReview").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("books");
};
