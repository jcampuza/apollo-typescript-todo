import React from "react";
import { Todo } from "../../../common/types/Todo";
import gql from "graphql-tag";
import styled from "styled-components";
import { Text } from "../ui/Text";
import { Mutation } from "react-apollo";
import { DeleteTodo, DeleteTodoVariables } from "../__graphql__/DeleteTodo";

const DELETE_TODO_MUTATION = gql`
  mutation DeleteTodo($id: ID!) {
    deleteTodo(id: $id)
  }
`;

interface TodoProps {
  todo: Todo;
  onDelete?: () => void;
}
export default function TodoItem({ todo, onDelete }: TodoProps) {
  return (
    <Mutation<DeleteTodo, DeleteTodoVariables>
      mutation={DELETE_TODO_MUTATION}
      variables={{ id: todo.id }}
      onCompleted={onDelete}
    >
      {(deleteTodo, { loading, error }) => {
        if (loading) return "Loading";
        if (error) return <p>Error</p>;

        return (
          <TodoItemWrapper onClick={() => deleteTodo()}>
            <Text size={16}>{todo.tasks}</Text>
            <Text weight={600}>{todo.urgent}</Text>
          </TodoItemWrapper>
        );
      }}
    </Mutation>
  );
}

/** STYLED */
const TodoItemWrapper = styled.div`
  background: #eeeeee;
  padding: 1rem;
  display: flex;
  justify-content: space-between;

  &:not(:last-child) {
    border-bottom: 1px solid #aaa;
  }
`;
