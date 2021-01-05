import { takeEvery, getContext } from "redux-saga/effects";
import { GO_TO_HOME, GO_TO_404 } from "../../actions/history";

function* goToHomeSaga() {
  const history = yield getContext("history");
  history.push("/");
}

function* goTo404Saga() {
  const history = yield getContext("history");
  history.push("/404");
}

export default function* watchHistory() {
  yield takeEvery(GO_TO_HOME, goToHomeSaga);
  yield takeEvery(GO_TO_404, goTo404Saga);
}
