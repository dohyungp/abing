import { all, fork } from "redux-saga/effects";
import watchAuth from "./auth";
import watchCreateUser from "./users/create";
import watchFetchUsers from "./users/list";
import { watchFetchMe } from "./users/fetch";
import watchFetchExperiments from "./experiments/list";
import watchFetchExperiment from "./experiments/retrieve";
import watchUpdateExperiment from "./experiments/update";
import watchCreateArms from "./arms/create";
import watchCreateExperiment from "./experiments/create";

export default function* rootSaga() {
  yield all([
    fork(watchAuth),
    fork(watchCreateUser),
    fork(watchFetchUsers),
    fork(watchFetchMe),
    fork(watchCreateExperiment),
    fork(watchFetchExperiments),
    fork(watchFetchExperiment),
    fork(watchUpdateExperiment),
    fork(watchCreateArms),
  ]);
}
