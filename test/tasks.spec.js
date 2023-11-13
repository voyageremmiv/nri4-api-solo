const { expect, assert } = require("chai");
const config = require("../knexfile");
// const knex = require("knex")(config);

const tasksModel = require("../src/tasks/tasks.model");
// const TASKS_TABLE = tasksModel.TASKS_TABLE;

describe("tasks", () => {
  describe("getAll", () => {
    it("should return an array of tasks", async () => {
      const tasks = await tasksModel.getAll();
      expect(tasks).to.be.an.instanceof(Array);
      expect(tasks.length).to.eq(3);
    });
  });
});
