import { takeEvery } from "redux-saga/effects";
import * as userAPI from "../api/user";
import { createPromiseSaga } from "../libs/asyncUtil";
import { GET_USERS } from "../actions/users/users";

const getUsersSaga = createPromiseSaga(GET_USERS, userAPI.getUsers);

export default function* watchUsers() {
  yield takeEvery(GET_USERS, getUsersSaga);
}
