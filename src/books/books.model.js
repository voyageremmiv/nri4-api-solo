const knex = require("../knex");
const BOOKS_TABLE = "books";

module.exports = {
  BOOKS_TABLE,

  /**
   * @return {Promise<Array>} A promise that resolves to an array of books.
   */
  getAll() {
    return knex
      .select({
        id: "id",
        title: "title",
        author: "author",
        year: "year",
        positiveReview: "positiveReview",
        negativeReview: "negativeReview",
      })
      .from(BOOKS_TABLE);
  },
};
