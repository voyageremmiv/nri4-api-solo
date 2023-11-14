const booksModel = require("./books.model");

module.exports = {
  async get(req, res) {
    const books = await booksModel.getAll();
    res.set({ "Access-Control-Allow-Origin": "*" });
    res.status(200).json(books);
  },
};
