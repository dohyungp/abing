import { takeLatest } from "redux-saga/effects";
import * as armAPI from "../../api/arms";
import { createPromiseSaga } from "../../libs/asyncUtil";
import { CREATE_ARMS } from "../../actions/arms";

const createArmsSaga = createPromiseSaga(CREATE_ARMS, armAPI.createArms, true);

export default function* watchCreateArms() {
  yield takeLatest(CREATE_ARMS, createArmsSaga);
}
