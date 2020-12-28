import { call, put, select, takeLatest } from "redux-saga/effects";
import * as userAPI from "../../api/user";
import { GET_ME, GET_ME_SUCCESS, GET_ME_ERROR } from "../../actions/users/me";

const apiToken = (state) => {
  return state.auth?.data?.access_token;
};

function* fetchMeSaga(action) {
  try {
    const access_token = yield select(apiToken);
    const payload = yield call(userAPI.getMe, {
      ...action.payload,
      access_token,
    });
    yield put({ type: GET_ME_SUCCESS, payload });
  } catch (e) {
    yield put({ type: GET_ME_ERROR, error: true, payload: e.message });
  }
}

export function* watchFetchMe() {
  yield takeLatest(GET_ME, fetchMeSaga);
}
