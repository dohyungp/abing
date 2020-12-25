import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import counter, { counterSaga } from "./counter";
import login, { loginSaga } from "./user";
import users, { userListSaga } from "./user";

const rootReducer = combineReducers({ counter, login, users });
export function* rootSaga() {
  yield all([counterSaga(), loginSaga(), userListSaga()]);
}

export default rootReducer;
