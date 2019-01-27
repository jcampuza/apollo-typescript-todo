import { Context } from "../interfaces/Context";

export const resolvers = {
  Query: {
    todos: async (_, __, ctx: Context) => {
      return ctx.dataSources.todoAPI.getTodos();
    },

    todo: async (_, { id }, ctx: Context) => {
      return ctx.dataSources.todoAPI.getTodoById(id);
    }
  },

  Mutation: {
    createTodo: async (_, args, ctx: Context) => {
      const todo = args.createTodoInput;

      return ctx.dataSources.todoAPI.createTodo(todo);
    },

    deleteTodo: async (_, args, ctx: Context) => {
      const id = args.id;

      return ctx.dataSources.todoAPI.deleteTodo(id);
    }
  }
};
