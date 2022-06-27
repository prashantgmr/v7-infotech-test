import { takeLatest } from "redux-saga/effects";
import { userTypes } from "../actions/actionTypes";
import { loginRequestSaga } from "./loginSaga";
import { registerRequestSaga } from "./registerSaga";

export default function* watchUserAuthentication() {
  yield takeLatest(userTypes.REGISTER_USER_REQUEST, registerRequestSaga);
  yield takeLatest(userTypes.LOGIN_REQUEST, loginRequestSaga);
}
