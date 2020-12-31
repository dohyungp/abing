import { all, fork } from "redux-saga/effects";
import watchAuth from "./auth";
import watchCreateUser from "./users/create";
import watchFetchUsers from "./users/list";
import { watchFetchMe } from "./users/fetch";
import watchFetchExperiments from "./experiments/list";

export default function* rootSaga() {
  yield all([
    fork(watchAuth),
    fork(watchCreateUser),
    fork(watchFetchUsers),
    fork(watchFetchMe),
    fork(watchFetchExperiments),
  ]);
}
