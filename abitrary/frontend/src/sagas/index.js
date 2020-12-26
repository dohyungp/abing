import { all } from "redux-saga/effects";
import watchLogin from "./login";
import watchUsers from "./users";

export default function* rootSaga() {
  yield all([watchLogin(), watchUsers()]);
}
