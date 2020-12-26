import { LOGIN_REQUEST } from "../actions/users/auth";
import { createPromiseSaga } from "../libs/asyncUtil";
import * as userAPI from "../api/user";
import { takeLatest } from "redux-saga/effects";

const loginSaga = createPromiseSaga(LOGIN_REQUEST, userAPI.login);

export default function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
}
