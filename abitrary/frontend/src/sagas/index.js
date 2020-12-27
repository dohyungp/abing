import { all, fork } from "redux-saga/effects";
import watchLogin from "./auth";
import watchCreateUser from "./users/create";
import watchFetchUsers from "./users/list";

export default function* rootSaga() {
  yield all([fork(watchLogin), fork(watchCreateUser), fork(watchFetchUsers)]);
}
