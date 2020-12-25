import * as loginAPI from "../api/login";
import {
  reducerUtils,
  handleAsyncActions,
  createPromiseSaga,
} from "../libs/asyncUtil";
import { takeEvery } from "redux-saga/effects";

/* 액션 타입 */
const LOGIN_REQUEST = "LOGIN_REQUEST";
const LOGIN_SUCCESS = "LOGIN_REQUEST_SUCCESS";
const LOGIN_ERROR = "LOGIN_REQUEST_ERROR";

export const loginRequest = (data) => ({ type: LOGIN_REQUEST, payload: data });

const requestLoginSaga = createPromiseSaga(LOGIN_REQUEST, loginAPI.login);

export function* loginSaga() {
  yield takeEvery(LOGIN_REQUEST, requestLoginSaga);
}

const initialState = {
  login: reducerUtils.initial(),
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
    case LOGIN_SUCCESS:
    case LOGIN_ERROR:
      return handleAsyncActions(LOGIN_REQUEST, "login", true)(state, action);
    default:
      return state;
  }
}
