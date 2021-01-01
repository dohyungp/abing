import { select, call, takeLatest, put, all } from "redux-saga/effects";
import * as experimentAPI from "../../api/experiment";
import { token } from "../../libs/asyncUtil";
import {
  CREATE_EXPERIMENT,
  CREATE_EXPERIMENT_SUCCESS,
  CREATE_EXPERIMENT_ERROR,
} from "../../actions/experiments";
import { CREATE_ARMS } from "../../actions/arms";

function* createExperimentSaga(action) {
  try {
    let access_token = null;
    access_token = yield select(token);
    const payload = yield call(experimentAPI.createExperiment, {
      ...action.payload,
      access_token,
    });

    if ((action.payload?.arms || []).length > 0) {
      const armsData = action.payload.arms.map((v) => ({
        ...v,
        experiment_id: payload.id,
      }));
      yield all([
        put({ type: CREATE_EXPERIMENT_SUCCESS, payload }),
        put({ type: CREATE_ARMS, payload: {access_token, data: armsData} }),
      ]);
    } else {
      yield put({ type: CREATE_EXPERIMENT_SUCCESS, payload });
    }
  } catch (e) {
    yield put({
      type: CREATE_EXPERIMENT_ERROR,
      error: true,
      payload: e.message,
    });
  }
}

export default function* watchCreateExperiment() {
  yield takeLatest(CREATE_EXPERIMENT, createExperimentSaga);
}
