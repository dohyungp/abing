import { all } from "redux-saga/effects";
import watchLogin from "./auth";
import watchUsers from "./users";

export default function* rootSaga() {
  yield all([watchLogin(), watchUsers()]);
}
