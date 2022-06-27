/* eslint-disable no-lone-blocks */
// import { push } from 'react-router-redux';
import { call, delay, put } from "redux-saga/effects";
import { userLogin } from "../../api";

import {
  userLoginFailure,
  //   userLoginRequest,
  //   userLoginFailure,
  userLoginSuccess,
} from "../actions/userActions";
import { AuthAction, AuthSignInInput } from "../types";

export function* loginRequestSaga(props: AuthAction<AuthSignInInput>): any {
  const username = props.payload.username;
  const password = props.payload.password;
  {
    try {
      const response = yield call(userLogin, username, password);
      const { data } = response;
      yield delay(500);
      console.log(data);
      yield put(userLoginSuccess("string"));
    } catch (error) {
      yield put(userLoginFailure("Error"));
    }
  }
}

// export function* watchLoginRequest() {
//   console.log("watchLoginRequest!");
//   yield takeEvery(userTypes.LOGIN_REQUEST, loginRequestSaga);
// }

// export function* watchLogout() {
//   yield takeEvery(userTypes.LOGOUT, logout);

//   console.log("LOGOUT");

//   // yield put(push('/'));
// }
