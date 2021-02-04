import { takeLatest } from "redux-saga/effects";
import * as featureAPI from "../../api/features";
import { createPromiseSaga } from "../../libs/asyncUtil";
import { UPDATE_FEATURE } from "../../actions/features";

const updateFeatureSaga = createPromiseSaga(
  UPDATE_FEATURE,
  featureAPI.updateFeature,
  true,
);

export default function* watchUpdateFeature() {
  yield takeLatest(UPDATE_FEATURE, updateFeatureSaga);
}
