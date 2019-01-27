import { TodoAPI } from "./todo";

export interface DataSources {
  todoAPI: TodoAPI;
}

export const createDataSources = knex => () => ({
  todoAPI: new TodoAPI(knex)
});
