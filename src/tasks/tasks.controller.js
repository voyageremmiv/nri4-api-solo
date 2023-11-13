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

  async patch(req, res) {
    const id = await tasksModel.update(req.body.id, req.body);
    res.sendStatus(200);
  },

  async delete(req, res) {
    const id = await tasksModel.delete(req.body.id);
    res.sendStatus(200);
  },
};
