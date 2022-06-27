import { SchemaLink } from "@apollo/client/link/schema";
import { makeExecutableSchema } from "@graphql-tools/schema";

import gql from "graphql-tag";

const typeDefs = gql`
  type Query {
    users: [User!]!
  }
  type Mutation {
    createUser(
      email: String!
      name: String!
      username: String!
      password: String!
    ): User
  }

  type User {
    id: ID!
    email: String!
    name: String!
    username: String!
    password: String!
  }
`;
export const schemaLink = new SchemaLink({
  schema: makeExecutableSchema({ typeDefs }),
});
