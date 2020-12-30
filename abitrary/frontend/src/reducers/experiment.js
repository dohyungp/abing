import * as types from "../actions/experiments";
import { reducerUtils } from "../libs/asyncUtil";

export function experiments(state = reducerUtils.initial([]), action) {
  switch (action.type) {
    case types.GET_EXPERIMENTS:
      return reducerUtils.loading(state.data);
    case types.GET_EXPERIMENTS_SUCCESS:
      return reducerUtils.success(action.payload);
    case types.GET_EXPERIMENTS_ERROR:
      return reducerUtils.error(action.payload);
    default:
      return state;
  }
}
