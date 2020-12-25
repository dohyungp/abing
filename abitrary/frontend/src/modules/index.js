import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import counter, { counterSaga } from "./counter";
import login, { loginSaga } from "./login";

const rootReducer = combineReducers({ counter, login });
export function* rootSaga() {
  yield all([counterSaga(), loginSaga()]);
}

export default rootReducer;
