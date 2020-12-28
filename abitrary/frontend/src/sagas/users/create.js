import { takeLatest } from "redux-saga/effects";
import * as userAPI from "../../api/user";
import { createPromiseSaga } from "../../libs/asyncUtil";
import { CREATE_USER } from "../../actions/users/users";

const createUserSaga = createPromiseSaga(CREATE_USER, userAPI.createUser);

export default function* watchCreateUser() {
  yield takeLatest(CREATE_USER, createUserSaga);
}
