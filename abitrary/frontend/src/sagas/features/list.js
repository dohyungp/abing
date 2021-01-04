import { takeLatest } from "redux-saga/effects";
import * as featureAPI from "../../api/features";
import { createPromiseSaga } from "../../libs/asyncUtil";
import { GET_FEATURES } from "../../actions/features";

const fetchFeaturesSaga = createPromiseSaga(
  GET_FEATURES,
  featureAPI.getFeatures,
  true,
);

export default function* watchFetchFeatures() {
  yield takeLatest(GET_FEATURES, fetchFeaturesSaga);
}
