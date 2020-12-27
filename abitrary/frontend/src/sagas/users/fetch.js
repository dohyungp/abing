import { takeLatest } from "redux-saga/effects";
import * as userAPI from "../../api/user";
import { createPromiseSaga } from "../../libs/asyncUtil";
import { GET_ME } from "../../actions/users/me";

const fetchMeSaga = createPromiseSaga(GET_ME, userAPI.getMe);

export function* watchFetchMe() {
  yield takeLatest(GET_ME, fetchMeSaga);
}
