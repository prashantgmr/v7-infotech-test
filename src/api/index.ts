import { gql } from "@apollo/client";
import client from "../graphql";
import { AuthSignUpInput } from "../redux/types";
export const userLogin = (username: string, password: string) => {
  return client.query({
    query: gql` {

        }`,
  });
};

export const userRegister = (data: AuthSignUpInput) => {
  if (data) {
    return client.query({
      query: gql` {
  
          }`,
    });
  } else return false;
};
