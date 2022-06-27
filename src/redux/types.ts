import { userTypes } from "./actions/actionTypes";

export interface UserLoginRequest {
  type: typeof userTypes.LOGIN_REQUEST;
  username: string;
  password: string;
}

export type UserLoginSuccess = {
  type: typeof userTypes.LOGIN_SUCCESS;
  idToken: string;
};

export type UserLoginFailure = {
  type: typeof userTypes.LOGIN_FAILURE;
  error: string;
};

export type UserActions =
  | UserLoginRequest
  | UserLoginSuccess
  | UserLoginFailure;

export interface UserRegisterRequest {
  type: typeof userTypes.REGISTER_USER_REQUEST;
  user: Object;
}

export type UserRegisterSuccess = {
  type: typeof userTypes.REGISTER_USER_SUCCESS;
  user: Object;
};

export type UserRegisterFailure = {
  type: typeof userTypes.REGISTER_USER_ERROR;
  error: string;
};

export type UserRegActions =
  | UserRegisterRequest
  | UserRegisterSuccess
  | UserRegisterFailure;

export interface AuthSignInInput {
  username: string;
  password: string;
}

export interface AuthSignUpInput {
  name: string;
  email: string;
  username: string;
  password: string;
}
export type AuthAction<Payload> = {
  type: userTypes;
  payload: Payload;
};
