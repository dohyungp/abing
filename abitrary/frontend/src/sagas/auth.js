import { LOGIN_REQUEST } from "../actions/users/auth";
import { createPromiseSaga } from "../libs/asyncUtil";
import * as authAPI from "../api/auth";
import { takeLatest } from "redux-saga/effects";

const loginSaga = createPromiseSaga(LOGIN_REQUEST, authAPI.login);

export default function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
}
