const knex = require("../knex");
const { validProps, requiredProps } = require("../util/validation");

const validateProps = validProps(["id", "title"]);
const validateRequired = requiredProps(["title"]);

const TASKS_TABLE = "tasks";

module.exports = {
  TASKS_TABLE,

  /**
   * @return {Promise<Array>} A promise that resolves to an array of tasks.
   */
  getAll() {
    return knex.select({ id: "id", title: "title" }).from(TASKS_TABLE);
  },

  /**
   * @param {number} id - The customer's id.
   * @return {Promise<Object>} A promise that resolves to the customer that matches the id.
   */
  getById(id) {
    return knex
      .select({ id: "id", title: "title" })
      .from(TASKS_TABLE)
      .where({ id: id })
      .first();
  },

  /**
   * @param {Object} task - The new task data to add.
   * @return {Promise<number>} A promise that resolves to the id of created task.
   */
  create(task) {
    validateRequired(validateProps(task));
    return knex(TASKS_TABLE).insert(task);
  },

  /**
   * @param {number} id - The unique id of the existing task.
   * @param {Object} task - The task data to change.
   * @return {Promise<number>} A promise that resolves to the id of the updated task.
   */
  update(id, task) {
    validateProps(task);
    return knex(TASKS_TABLE)
      .where({ id: id })
      .update({ title: task.title })
      .then(() => id);
  },

  delete(id) {
    return knex.from(TASKS_TABLE).where({ id: id }).del()
  }
};
