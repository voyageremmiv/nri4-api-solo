/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("tasks").del();
  await knex("tasks").insert([
    { id: 1, title: "食材を買いに行く" },
    { id: 2, title: "申請タスクAを上げる" },
    { id: 3, title: "資源ごみを出す" },
  ]);
};
