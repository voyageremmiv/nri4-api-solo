const { expect, assert } = require("chai");
const config = require("../knexfile");
const knex = require("knex")(config);

const tasksModel = require("../src/tasks/tasks.model");
const TASKS_TABLE = tasksModel.TASKS_TABLE;

describe("tasks", () => {
  describe("getAll", () => {
    it("should return an array of tasks", async () => {
      const tasks = await tasksModel.getAll();
      expect(tasks).to.be.an.instanceof(Array);
      console.log(tasks);
      expect(tasks.length).to.eq(3);
    });
  });

  describe("create", () => {
    const newId = 9999;

    after(async () => {
      await knex
        .from(TASKS_TABLE)
        .where("id", newId)
        .del()
        .catch(console.error);
      console.log("Deleted test task");
    });

    describe("with valid properties", () => {
      it("should be able to create a new task", async () => {
        const id = await tasksModel.create({ id: newId, title: "testTitle" });
        const task = await knex(TASKS_TABLE)
          .select()
          .where("id", newId)
          .first();
        expect(task).to.exist;
        expect(task.id).to.eq(newId);
      });
    });
  });
});
