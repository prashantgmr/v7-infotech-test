import { userTypes } from "./actionTypes";
import {
  AuthAction,
  AuthSignInInput,
  AuthSignUpInput,
  UserLoginFailure,
  UserLoginSuccess,
  UserRegisterFailure,
  UserRegisterSuccess,
} from "../types";

export const userLoginRequest = (
  props: AuthSignInInput
): AuthAction<AuthSignInInput> => ({
  type: userTypes.LOGIN_REQUEST,
  payload: { ...props },
});

export const userLoginSuccess = (idToken: string): UserLoginSuccess => ({
  type: userTypes.LOGIN_SUCCESS,
  idToken,
});

export const userLoginFailure = (error: string): UserLoginFailure => ({
  type: userTypes.LOGIN_FAILURE,
  error,
});

export const userRegisterRequest = (
  props: AuthSignUpInput
): AuthAction<AuthSignUpInput> => ({
  type: userTypes.REGISTER_USER_ERROR,
  payload: { ...props },
});

export const userRegisterSuccess = (user: Object): UserRegisterSuccess => ({
  type: userTypes.REGISTER_USER_SUCCESS,
  user,
});

export const userRegisterFailure = (error: string): UserRegisterFailure => ({
  type: userTypes.REGISTER_USER_ERROR,
  error,
});
