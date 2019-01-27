import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    todos: [Todo]
    todo(id: ID!): Todo
  }

  type Mutation {
    createTodo(createTodoInput: CreateTodoInput): Todo
    deleteTodo(id: Int): Boolean
  }

  input CreateTodoInput {
    tasks: String!
    urgent: Int
  }

  type Todo {
    id: ID!
    tasks: String!
    urgent: Int
  }
`;
