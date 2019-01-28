import React, { useState } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";

const CREATE_TODO_MUTATION = gql`
  mutation CreateTodo($createTodoInput: CreateTodoInput) {
    createTodo(createTodoInput: $createTodoInput) {
      id
      tasks
      urgent
    }
  }
`;

interface CreateTodoData {
  createTodo: {
    id: number;
    tasks: string;
    urgent: number;
  };
}

interface CreateTodoVariables {
  createTodoInput: {
    tasks: string;
  };
}

class CreateTodoMutation extends Mutation<
  CreateTodoData,
  CreateTodoVariables
> {}

interface CreateTodoProps {
  onSuccess?: () => void;
}

export default function CreateTodo({ onSuccess }: CreateTodoProps) {
  const [task, setTask] = useState("");

  return (
    <CreateTodoMutation
      mutation={CREATE_TODO_MUTATION}
      variables={{ createTodoInput: { tasks: task } }}
      onCompleted={onSuccess}
    >
      {(submit, { loading }) => (
        <Form
          onSubmit={e => {
            e.preventDefault();
            if (!loading) {
              submit();
            }
          }}
        >
          <Input
            value={task}
            onChange={e => setTask(e.currentTarget.value)}
            type="text"
          />
          <Button type="submit">Create Task</Button>
        </Form>
      )}
    </CreateTodoMutation>
  );
}

/** STYLED COMPONENTS */
const Input = styled.input`
  border: 1px solid #ccc;
  margin: 0;
  padding: 0px 6px;
  height: 2rem;
  box-sizing: border-box;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  padding: 0 1rem;
  margin: 0;
  border: none;
  border-radius: 2px;
  background-color: #ccc;
  height: 2rem;
`;
