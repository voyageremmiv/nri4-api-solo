const setupServer = () => {
  const express = require("express");
  const app = express();
  app.use(express.json());

  app.get('/', (req, res) => {
    res.status(200).json({ text: "hello world" });
  })
  return app;
};

module.exports = { setupServer };
