const knex = require("../knex");
const { validProps, requiredProps } = require("../util/validation");

const validateProps = validProps(["id", "title"]);
const validateRequired = requiredProps(["title"]);

const TASKS_TABLE = "tasks";

module.exports = {
  TASKS_TABLE,

  /**
   * @return {Promise<Array>} A promise that resolves to an array of customers.
   */
  getAll() {
    return knex.select({ id: "id", title: "title" }).from(TASKS_TABLE);
  },

  /**
   * @param {Object} task - The new task data to add.
   * @return {Promise<number>} A promise that resolves to the id of created customer.
   */
  create(task) {
    validateRequired(validateProps(task));
    return knex(TASKS_TABLE).insert(task);
  },
};
