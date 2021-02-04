import { all, fork } from "redux-saga/effects";
import watchAuth from "./auth";
import watchCreateUser from "./users/create";
import watchFetchUsers from "./users/list";
import { watchFetchMe } from "./users/fetch";
import watchFetchExperiments from "./experiments/list";
import watchFetchExperiment from "./experiments/retrieve";
import watchUpdateExperiment from "./experiments/update";
import watchCreateExperiment from "./experiments/create";
import watchDeleteExperiment from "./experiments/delete";
import watchCreateArms from "./arms/create";
import watchUpdateArm from "./arms/update";
import watchFetchArms from "./arms/list";
import { watchCreateFeature, watchCreateFeatures } from "./features/create";
import watchFetchFeatures from "./features/list";
import watchUpdateFeature from "./features/update";
import watchDeleteFeature from "./features/delete";
import watchDeleteArm from "./arms/delete";
import watchHistory from "./history";

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
    fork(watchDeleteExperiment),
    fork(watchCreateArms),
    fork(watchFetchArms),
    fork(watchUpdateArm),
    fork(watchDeleteArm),
    fork(watchCreateFeature),
    fork(watchCreateFeatures),
    fork(watchFetchFeatures),
    fork(watchUpdateFeature),
    fork(watchHistory),
    fork(watchDeleteFeature),
  ]);
}
