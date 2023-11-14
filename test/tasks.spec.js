const { expect, assert } = require("chai");
const config = require("../knexfile");
const knex = require("knex")(config);

const tasksModel = require("../src/tasks/tasks.model");
const TASKS_TABLE = tasksModel.TASKS_TABLE;

describe("tasks", () => {
  describe("getAll", () => {
    it("should return an array of tasks", async () => {
      const tasks = await tasksModel.getAll();
      expect(tasks).to.deep.equal([
        { id: 1, title: "食材を買いに行く" },
        { id: 2, title: "申請タスクAを上げる" },
        { id: 3, title: "資源ごみを出す" },
      ]);
    });
  });

  describe("getById", () => {
    describe("when task exists", () => {
      const existId = 1;
      it("should get task by id", async () => {
        const task = await tasksModel.getById(existId);
        expect(task).to.deep.equal({ id: 1, title: "食材を買いに行く" });
      });
    });

    describe("when task doesn't exist", () => {
      it("should return undefined", async () => {
        const task = await tasksModel.getById(7777);
        expect(task).to.be.undefined;
      });
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
        const checkTask = await knex(TASKS_TABLE)
          .select()
          .where("id", newId)
          .first();
        expect(checkTask.id).to.deep.equal(newId);
      });
    });
  });

  describe("update", () => {
    describe("with valid parameters", () => {
      const updateId = 3;
      after(async () => {
        await knex(TASKS_TABLE)
          .update({
            title: "資源ごみを出す",
          })
          .where("id", updateId)
          .returning("id")
          .then(() => {
            console.log("updated test task");
          })
          .catch(console.error);
      });

      it("should return the id", async () => {
        const id = await tasksModel.update(updateId, {
          title: "UpdateTitle",
        });
        expect(id).to.eq(updateId);
      });

      it("should update the task", async () => {
        const task = await tasksModel.getById(updateId);
        expect(task.title).to.eq("UpdateTitle");
      });
    });
  });

  describe("delete", () => {
    const deleteId = 6666;

    before(async () => {
      await knex(TASKS_TABLE)
        .insert({ id: 6666, title: "DeleteTask" })
        .catch(console.error);
      console.log("Add test task");
    });

    describe("with valid properties", () => {
      it("should be able to delete a exist task", async () => {
        const id = await tasksModel.delete(deleteId);
        const task = await knex(TASKS_TABLE)
          .select()
          .where("id", deleteId)
          .first();
        expect(task).to.not.exist;
      });
    });
  });
});
