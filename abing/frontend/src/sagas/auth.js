import { LOGIN_REQUEST, LOGOUT_REQUEST } from "../actions/users/auth";
import { createPromiseSaga } from "../libs/asyncUtil";
import * as authAPI from "../api/auth";
import { takeEvery } from "redux-saga/effects";

const loginSaga = createPromiseSaga(LOGIN_REQUEST, authAPI.login);
const logoutSaga = createPromiseSaga(LOGOUT_REQUEST, (args) => {});

export default function* watchAuth() {
  yield takeEvery(LOGIN_REQUEST, loginSaga);
  yield takeEvery(LOGOUT_REQUEST, logoutSaga);
}
