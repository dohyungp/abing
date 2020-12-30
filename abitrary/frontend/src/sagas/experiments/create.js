import { takeLatest } from "redux-saga/effects";
import * as experimentAPI from "../../api/experiment";
import { createPromiseSaga } from "../../libs/asyncUtil";
import { CREATE_EXPERIMENT } from "../../actions/experiments";

const createExperimentSaga = createPromiseSaga(
  CREATE_EXPERIMENT,
  experimentAPI.createExperiment,
);

export default function* watchCreateExperiment() {
  yield takeLatest(CREATE_EXPERIMENT, createExperimentSaga);
}
