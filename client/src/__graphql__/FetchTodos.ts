/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchTodos
// ====================================================

export interface FetchTodos_todos {
  __typename: "Todo";
  id: string;
  tasks: string;
  urgent: number | null;
}

export interface FetchTodos {
  todos: (FetchTodos_todos | null)[] | null;
}
