const setupServer = () => {
  const express = require("express");
  const tasksController = require("./tasks/tasks.controller");
  const app = express();
  app.use(express.json());

  app.get("/", (req, res) => {
    res.status(200).json({ text: "hello world" });
  });

  app.options("/tasks", (req, res) => {
    res.set({ "Access-Control-Allow-Origin": "*" });
    res.set({ "Access-Control-Allow-Methods": "GET,POST,PATCH,DELETE" });
    res.set({ "Access-Control-Allow-Headers": "Content-Type" });

    res.sendStatus(200);
  });

  app.get("/tasks", tasksController.get);
  app.post("/tasks", tasksController.post);
  app.patch("/tasks", tasksController.patch);
  app.delete("/tasks", tasksController.delete);
  return app;
};

module.exports = { setupServer };
