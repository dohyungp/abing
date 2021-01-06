import { takeLatest } from "redux-saga/effects";
import * as experimentAPI from "../../api/experiment";
import { createPromiseSaga } from "../../libs/asyncUtil";
import { GET_EXPERIMENTS } from "../../actions/experiments";

const fetchExperimentsSaga = createPromiseSaga(
  GET_EXPERIMENTS,
  experimentAPI.getExperiments,
  true,
);

export default function* watchFetchExperiments() {
  yield takeLatest(GET_EXPERIMENTS, fetchExperimentsSaga);
}
