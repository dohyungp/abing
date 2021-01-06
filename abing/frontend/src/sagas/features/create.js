import { takeLatest } from "redux-saga/effects";
import * as featureAPI from "../../api/features";
import { createPromiseSaga } from "../../libs/asyncUtil";
import { CREATE_FEATURE } from "../../actions/features";

const createFeatureSaga = createPromiseSaga(
  CREATE_FEATURE,
  featureAPI.createFeature,
  true,
);

export default function* watchCreateFeature() {
  yield takeLatest(CREATE_FEATURE, createFeatureSaga);
}
