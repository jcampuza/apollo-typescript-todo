import { ApolloServer } from "apollo-server";
import { knex } from "./db";
// import { createDataSources } from "./datasources";
import { typeDefs } from "./type-defs";
import { resolvers } from "./resolvers";
import { TodoAPI } from "./datasources/todo";

const server = new ApolloServer({
  dataSources: () => {
    return {
      todoAPI: new TodoAPI(knex)
    };
  },
  typeDefs,
  resolvers
});

if (process.env.NODE_ENV !== "test") {
  server
    .listen({ port: 8000 })
    .then(({ url }) => console.log(`Apollo server running at ${url}`))
    .catch(err => console.log(err));
}
