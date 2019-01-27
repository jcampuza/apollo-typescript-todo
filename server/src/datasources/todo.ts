import { DataSource } from "apollo-datasource";
import { Todo } from "../interfaces/Todo";
import * as Knex from "knex";

export class TodoAPI extends DataSource {
  tableName = "todos";
  constructor(private db: Knex) {
    super();
  }

  get qb() {
    return this.db(this.tableName);
  }

  async getTodos() {
    const todos: Todo[] = await this.qb.select();

    return todos;
  }

  async getTodoById(id: number) {
    const todo: Todo = await this.qb
      .where("id", id)
      .limit(1)
      .select();

    return todo[0];
  }

  async createTodo(todo: Todo) {
    const insertedIds: number[] = await this.qb.insert(todo);
    const todos: Todo[] = await this.qb.where({ id: insertedIds[0] }).select();

    return todos[0];
  }

  async deleteTodo(id: number) {
    const res = await this.qb
      .where({ id })
      .limit(1)
      .del();

    return !!res;
  }
}
