import { all, call, put, select, takeLatest } from "redux-saga/effects";
import * as userAPI from "../../api/user";
import { GET_ME, GET_ME_SUCCESS, GET_ME_ERROR } from "../../actions/users/me";
import { LOGIN_REQUEST } from "../../actions/users/auth";

const token = (state) => {
  return state.auth?.data?.access_token;
};

function* fetchMeSaga(action) {
  try {
    const access_token = yield select(token);
    const payload = yield call(userAPI.getMe, {
      ...action.payload,
      access_token,
    });
    yield put({ type: GET_ME_SUCCESS, payload });
  } catch (e) {
    yield all([
      put({ type: GET_ME_ERROR, error: true, payload: e.message }),
      put({ type: LOGIN_REQUEST }),
    ]);
  }
}

export function* watchFetchMe() {
  yield takeLatest(GET_ME, fetchMeSaga);
}
