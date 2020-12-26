import { takeEvery, takeLatest } from "redux-saga/effects";
import * as userAPI from "../api/user";
import { createPromiseSaga } from "../libs/asyncUtil";
import { GET_USERS, CREATE_USER } from "../actions/users/users";

const getUsersSaga = createPromiseSaga(GET_USERS, userAPI.getUsers);
const createUserSaga = createPromiseSaga(CREATE_USER, userAPI.createUser);

export default function* watchUsers() {
  yield takeEvery(GET_USERS, getUsersSaga);
  yield takeLatest(CREATE_USER, createUserSaga);
}
