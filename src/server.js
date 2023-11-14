const setupServer = () => {
  const express = require("express");
  const tasksController = require("./tasks/tasks.controller");
  const booksController = require("./books/books.controller");
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

  app.options("/tasks/:id", (req, res) => {
    res.set({ "Access-Control-Allow-Origin": "*" });
    res.set({ "Access-Control-Allow-Methods": "GET,POST,PATCH,DELETE" });
    res.set({ "Access-Control-Allow-Headers": "Content-Type" });

    res.sendStatus(200);
  });

  app.options("/books", (req, res) => {
    res.set({ "Access-Control-Allow-Origin": "*" });
    res.set({ "Access-Control-Allow-Methods": "GET,POST,PATCH,DELETE" });
    res.set({ "Access-Control-Allow-Headers": "Content-Type" });

    res.sendStatus(200);
  });

  const validateId = (req, res, next) => {
    const id = parseInt(req.params.id);
    if (id) {
      next();
    } else {
      res
        .status(400)
        .send(
          "Invalid id parameter. Expecting number, received " +
            typeof req.params.id
        );
    }
  };

  app.get("/tasks", tasksController.get);
  app.post("/tasks", tasksController.post);
  app.patch("/tasks/:id", validateId, tasksController.patch);
  app.delete("/tasks/:id", validateId, tasksController.delete);

  app.get("/books", booksController.get);

  return app;
};

module.exports = { setupServer };
