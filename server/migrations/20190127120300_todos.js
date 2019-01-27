exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists("todos", table => {
    table.increments();
    table.string("tasks");
    table.integer("urgent");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("todos");
};
