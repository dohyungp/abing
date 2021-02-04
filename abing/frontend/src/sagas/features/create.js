import { takeLatest } from "redux-saga/effects";
import * as featureAPI from "../../api/features";
import { createPromiseSaga } from "../../libs/asyncUtil";
import { CREATE_FEATURE, CREATE_FEATURES } from "../../actions/features";

const createFeatureSaga = createPromiseSaga(
  CREATE_FEATURE,
  featureAPI.createFeature,
  true,
);

const createFeaturesSaga = createPromiseSaga(
  CREATE_FEATURES,
  featureAPI.createFeatures,
  true,
);

export function* watchCreateFeature() {
  yield takeLatest(CREATE_FEATURE, createFeatureSaga);
}

export function* watchCreateFeatures() {
  yield takeLatest(CREATE_FEATURES, createFeaturesSaga);
}
