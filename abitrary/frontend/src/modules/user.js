import * as userAPI from "../api/user";
import {
  reducerUtils,
  handleAsyncActions,
  createPromiseSaga,
} from "../libs/asyncUtil";
import { takeEvery, takeLatest } from "redux-saga/effects";

/* 액션 타입 */
const LOGIN_REQUEST = "LOGIN_REQUEST";
const LOGIN_SUCCESS = "LOGIN_REQUEST_SUCCESS";
const LOGIN_ERROR = "LOGIN_REQUEST_ERROR";
const GET_USERS = "GET_USERS";
const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
const GET_USERS_ERROR = "GET_USERS_ERROR";

export const loginRequest = (data) => ({ type: LOGIN_REQUEST, payload: data });
export const getUsers = (data) => ({ type: GET_USERS, payload: data });

const requestLoginSaga = createPromiseSaga(LOGIN_REQUEST, userAPI.login);
const getUserListSaga = createPromiseSaga(GET_USERS, userAPI.getUsers);

export function* loginSaga() {
  yield takeLatest(LOGIN_REQUEST, requestLoginSaga);
}

export function* userListSaga() {
  yield takeEvery(GET_USERS, getUserListSaga);
}

const initialState = {
  login: reducerUtils.initial(),
  users: reducerUtils.initial(),
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
    case LOGIN_SUCCESS:
    case LOGIN_ERROR:
      return handleAsyncActions(LOGIN_REQUEST, "login", true)(state, action);
    case GET_USERS:
    case GET_USERS_SUCCESS:
    case GET_USERS_ERROR:
      return handleAsyncActions(GET_USERS, "users", true)(state, action);
    default:
      return state;
  }
}
