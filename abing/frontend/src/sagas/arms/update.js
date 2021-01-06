import { takeLatest } from "redux-saga/effects";
import * as armAPI from "../../api/arms";
import { createPromiseSaga } from "../../libs/asyncUtil";
import { UPDATE_ARM } from "../../actions/arms";

const updateArmsSaga = createPromiseSaga(UPDATE_ARM, armAPI.updateArm, true);

export default function* watchUpdateArm() {
  yield takeLatest(UPDATE_ARM, updateArmsSaga);
}
