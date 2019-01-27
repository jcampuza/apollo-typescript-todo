exports.seed = function(knex, Promise) {
  return knex("todos")
    .del()
    .then(() => {
      return knex("todos").insert([
        { id: 1, tasks: "Get Coffee 1" },
        { id: 2, tasks: "Go to the gym" },
        { id: 3, tasks: "Go to work" }
      ]);
    });
};
