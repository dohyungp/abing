import { takeLatest } from "redux-saga/effects";
import * as experimentAPI from "../../api/experiment";
import { createPromiseSaga } from "../../libs/asyncUtil";
import { GET_EXPERIMENT } from "../../actions/experiments";

const fetchExperimentSaga = createPromiseSaga(
  GET_EXPERIMENT,
  experimentAPI.getExperiment,
  true,
);

export default function* watchFetchExperiment() {
  yield takeLatest(GET_EXPERIMENT, fetchExperimentSaga);
}
