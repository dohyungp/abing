import { takeLatest } from "redux-saga/effects";
import * as featureAPI from "../../api/features";
import { createPromiseSaga } from "../../libs/asyncUtil";
import { DELETE_FEATURE } from "../../actions/features";

const deleteFeatureSaga = createPromiseSaga(
  DELETE_FEATURE,
  featureAPI.deleteFeature,
  true,
);

export default function* watchDeleteFeature() {
  yield takeLatest(DELETE_FEATURE, deleteFeatureSaga);
}
