import { takeLatest } from "redux-saga/effects";
import * as armAPI from "../../api/arms";
import { createPromiseSaga } from "../../libs/asyncUtil";
import { GET_ARMS } from "../../actions/arms";

const fetchArmsSaga = createPromiseSaga(GET_ARMS, armAPI.getArms, true);

export default function* watchFetchArms() {
  yield takeLatest(GET_ARMS, fetchArmsSaga);
}
