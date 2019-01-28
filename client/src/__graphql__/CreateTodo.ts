/* tslint:disable */
// This file was automatically generated and should not be edited.

import { CreateTodoInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CreateTodo
// ====================================================

export interface CreateTodo_createTodo {
  __typename: "Todo";
  id: string;
  tasks: string;
  urgent: number | null;
}

export interface CreateTodo {
  createTodo: CreateTodo_createTodo | null;
}

export interface CreateTodoVariables {
  createTodoInput?: CreateTodoInput | null;
}
