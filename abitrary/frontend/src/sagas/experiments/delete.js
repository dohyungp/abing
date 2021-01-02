import { select, put, call, takeLatest, getContext } from "redux-saga/effects";
import * as experimentAPI from "../../api/experiment";
import { token } from "../../libs/asyncUtil";
import {
  DELETE_EXPERIMENT,
  DELETE_EXPERIMENT_SUCCESS,
  DELETE_EXPERIMENT_ERROR,
} from "../../actions/experiments";

function* deleteExperimentSaga(action) {
  try {
    let access_token = yield select(token);
    const payload = yield call(experimentAPI.deleteExperiment, {
      ...action.payload,
      access_token,
    });
    const history = yield getContext("history");
    yield put({ type: DELETE_EXPERIMENT_SUCCESS, payload });
    history.push("/experiments");
  } catch (e) {
    yield put({
      type: DELETE_EXPERIMENT_ERROR,
      error: true,
      payload: e.message,
    });
  }
}

export default function* watchDeleteExperiment() {
  yield takeLatest(DELETE_EXPERIMENT, deleteExperimentSaga);
}
