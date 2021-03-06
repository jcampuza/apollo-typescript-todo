import { gql } from "apollo-server";

export const typeDefs = gql`
  input CreateTodoInput {
    tasks: String!
    urgent: Int
  }

  type Todo {
    id: ID!
    tasks: String!
    urgent: Int
  }

  type Query {
    todos: [Todo]
    todo(id: ID!): Todo
  }

  type Mutation {
    createTodo(createTodoInput: CreateTodoInput): Todo
    deleteTodo(id: ID!): Boolean
  }
`;
