const tasksModel = require("./tasks.model");

module.exports = {
  async get(req, res) {
    const tasks = await tasksModel.getAll();
    res.set({ "Access-Control-Allow-Origin": "*" });
    res.status(200).json(tasks);
  },

  async post(req, res) {
    const id = await tasksModel.create(req.body);
    const addedTask = await tasksModel.getById(id);
    res.set({ "Access-Control-Allow-Origin": "*" });
    res.status(200).json(addedTask);
  },

  async patch(req, res) {
    const id = await tasksModel.update(req.params.id, req.body);
    const updatedTask = await tasksModel.getById(id);
    res.set({ "Access-Control-Allow-Origin": "*" });
    res.status(200).json(updatedTask);
  },

  async delete(req, res) {
    const id = req.params.id;
    const deleteTask = await tasksModel.getById(id);
    await tasksModel.delete(id);
    res.set({ "Access-Control-Allow-Origin": "*" });
    res.status(200).json(deleteTask);
  },
};
