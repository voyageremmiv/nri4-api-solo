const tasksModel = require("./tasks.model");

module.exports = {
  async index(req, res) {
    const tasks = await tasksModel.getAll();
    res.status(200).json(tasks);
  },
};
