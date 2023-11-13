const setupServer = () => {
  const express = require("express");
  const tasksController = require("./tasks/tasks.controller");
  const app = express();
  app.use(express.json());

  app.get("/", (req, res) => {
    res.status(200).json({ text: "hello world" });
  });

  app.get("/tasks", tasksController.index);
  return app;
};

module.exports = { setupServer };
