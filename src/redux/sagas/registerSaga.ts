// import { push } from 'react-router-redux';
import { call, delay, put } from "redux-saga/effects";
import { userRegister } from "../../api";
import {
  userRegisterFailure,
  userRegisterSuccess,
} from "../actions/userActions";

import { AuthAction, AuthSignUpInput } from "../types";

// eslint-disable-next-line require-yield
export function* registerRequestSaga(props: AuthAction<AuthSignUpInput>): any {
  try {
    const response = yield call(userRegister, props.payload);
    const { data } = response;
    yield delay(500);
    yield put(userRegisterSuccess(data));
  } catch (error) {
    yield put(userRegisterFailure("Error"));
  }
}

// export function* watchRegisteRequest() {
//   console.log("watchLoginRequest!");
//   yield takeEvery(userTypes.REGISTER_USER_REQUEST, registerRequestSaga);
// }

// export function* watchLogout() {
//   yield takeEvery(userTypes.LOGOUT, logout);

//   console.log("LOGOUT");

//   // yield put(push('/'));
// }
