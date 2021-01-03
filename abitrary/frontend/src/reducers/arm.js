import * as types from "../actions/arms";
import { reducerUtils } from "../libs/asyncUtil";

export function arms(state = reducerUtils.initial({}), action) {
  switch (action.type) {
    case types.CREATE_ARMS:
      return reducerUtils.loading(state.data);
    case types.CREATE_ARMS_SUCCESS:
      let newDataByCreate = {};
      action.payload.map((v) => {
        newDataByCreate[v.experiment_id] = [
          ...(state.data?.[v.experiment_id] || []),
          v,
        ];
        return null;
      });
      return reducerUtils.success(newDataByCreate);
    case types.CREATE_ARMS_ERROR:
      return reducerUtils.error(action.payload, state.data);
    case types.GET_ARMS:
      return reducerUtils.loading(state.data);
    case types.GET_ARMS_SUCCESS:
      let newDataByGet = {};
      action.payload.map((v) => {
        newDataByGet[v.experiment_id] = [
          ...(state.data?.[v.experiment_id] || []),
          v,
        ];
        return null;
      });
      return reducerUtils.success(newDataByGet);
    case types.GET_ARMS_ERROR:
      return reducerUtils.error(action.payload, state.data);
    case types.UPDATE_ARM:
      return reducerUtils.loading(state.data);
    case types.UPDATE_ARM_SUCCESS:
      return reducerUtils.success({
        ...state.data,
        [action.payload.experiment_id]: (
          state.data?.[action.payload.experiment_id] || []
        ).map((v) => (v.id === action.payload.id ? action.payload : v)),
      });
    case types.UPDATE_ARM_ERROR:
      return reducerUtils.error(action.payload, state.data);
    default:
      return state;
  }
}
