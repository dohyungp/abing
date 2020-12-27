import { takeLatest } from "redux-saga/effects";
import * as userAPI from "../../api/user";
import { createPromiseSaga } from "../../libs/asyncUtil";
import { GET_USERS } from "../../actions/users/users";

const createUserSaga = createPromiseSaga(GET_USERS, userAPI.getUsers);

export default function* watchFetchUsers() {
  yield takeLatest(GET_USERS, createUserSaga);
}
