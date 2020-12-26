import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import login, { loginSaga } from "./user";
import users, { userListSaga } from "./user";

const rootReducer = combineReducers({ login, users });
export function* rootSaga() {
  yield all([loginSaga(), userListSaga()]);
}

export default rootReducer;
