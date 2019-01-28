import React, { Component } from "react";
import TodoForm from "./components/CreateTodo";
import { GlobalStyles } from "./components/GlobalStyle";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Todo } from "../../common/types/Todo";
import TodoItem from "./components/TodoItem";
import { FetchTodos } from "./__graphql__/FetchTodos";

const FETCH_TODOS_QUERY = gql`
  query FetchTodos {
    todos {
      id
      tasks
      urgent
    }
  }
`;

class App extends Component {
  render() {
    return (
      <>
        <Query<FetchTodos> query={FETCH_TODOS_QUERY}>
          {({ data, loading, error, refetch }) => {
            if (loading || !data) return "loading";
            if (error) return <p>Error</p>;

            return (
              <>
                {data.todos &&
                  data.todos.map(
                    todo =>
                      todo && (
                        <TodoItem todo={todo} onDelete={() => refetch()} />
                      )
                  )}

                <TodoForm onSuccess={() => refetch()} />
              </>
            );
          }}
        </Query>
        <GlobalStyles />
      </>
    );
  }
}

export default App;
