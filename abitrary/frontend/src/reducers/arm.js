import * as types from "../actions/arms";
import { reducerUtils } from "../libs/asyncUtil";

export function arms(state = reducerUtils.initial([]), action) {
  switch (action.type) {
    case types.CREATE_ARMS:
      return reducerUtils.loading(state.data);
    case types.CREATE_ARMS_SUCCESS:
      return reducerUtils.success(action.payload);
    case types.CREATE_ARMS_ERROR:
      return reducerUtils.error(action.payload);
    default:
      return state;
  }
}
