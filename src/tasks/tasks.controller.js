const tasksModel = require("./tasks.model");

module.exports = {
  async get(req, res) {
    const tasks = await tasksModel.getAll();
    res.status(200).json(tasks);
  },

  async post(req, res) {
    const id = await tasksModel.create(req.body);
    res.sendStatus(200);
  },
};
