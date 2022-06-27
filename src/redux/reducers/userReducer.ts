/* eslint-disable import/no-anonymous-default-export */
import { userTypes } from "../actions/actionTypes";
import { UserActions } from "../types";

export interface AuthState {
  isLoggingIn: boolean;
  idToken: string | null;
  error: string | null;
}

export const initialState: AuthState = {
  isLoggingIn: false,
  error: null,
  idToken: null,
};

export default (state = initialState, action: UserActions) => {
  switch (action.type) {
    case userTypes.LOGIN_SUCCESS:
      return {
        ...state,
        idToken: "TEMPORARY PLACEHOLDER TOKEN: " + action.idToken,
        isLoggingIn: true,
      };
    case userTypes.LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        error: "TEMPORARY PLACEHOLDER ERROR TEXT: " + action.error,
      };
    default:
      return {
        ...state,
      };
  }
};
