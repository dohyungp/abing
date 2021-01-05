import { takeLatest } from "redux-saga/effects";
import * as experimentAPI from "../../api/experiment";
import { createPromiseSaga } from "../../libs/asyncUtil";
import { UPDATE_EXPERIMENT } from "../../actions/experiments";

const updateExperimentSaga = createPromiseSaga(
  UPDATE_EXPERIMENT,
  experimentAPI.updateExperiment,
  true,
);

export default function* watchUpdateExperiment() {
  yield takeLatest(UPDATE_EXPERIMENT, updateExperimentSaga);
}
