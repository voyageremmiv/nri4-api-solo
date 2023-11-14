const { expect, assert } = require("chai");
const config = require("../knexfile");
const knex = require("knex")(config);

const booksModel = require("../src/books/books.model");
const BOOKS_TABLE = booksModel.BOOKS_TABLE;

describe("books", () => {
  describe("getAll", () => {
    it("should return an array of books", async () => {
      const books = await booksModel.getAll();
      expect(books).to.deep.equal([
        {
          id: 1,
          title: "Foundation",
          author: "Isaac Asimov",
          year: 1951,
          positiveReview: 2223,
          negativeReview: 259,
        },
        {
          id: 2,
          title: "Frankenstein",
          author: "Mary Shelley",
          year: 1818,
          positiveReview: 5677,
          negativeReview: 1265,
        },
        {
          id: 3,
          title: "Solaris",
          author: "Stanislaw Lem",
          year: 1961,
          positiveReview: 3487,
          negativeReview: 1845,
        },
        {
          id: 4,
          title: "Dune",
          author: "Frank Herbert",
          year: 1965,
          positiveReview: 8576,
          negativeReview: 663,
        },
        {
          id: 5,
          title: "The Left Hand of Darkness",
          author: "Ursula K. Le Guin",
          year: 1969,
          positiveReview: 6631,
          negativeReview: 993,
        },
        {
          id: 6,
          title: "A Scanner Darkly",
          author: "Philip K Dick",
          year: 1977,
          positiveReview: 8124,
          negativeReview: 1847,
        },
      ]);
    });
  });
});
