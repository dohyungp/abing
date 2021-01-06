import { takeLatest } from "redux-saga/effects";
import * as armAPI from "../../api/arms";
import { createPromiseSaga } from "../../libs/asyncUtil";
import { DELETE_ARM } from "../../actions/arms";

const deleteArmSaga = createPromiseSaga(DELETE_ARM, armAPI.deleteArm, true);

export default function* watchDeleteArm() {
  yield takeLatest(DELETE_ARM, deleteArmSaga);
}
