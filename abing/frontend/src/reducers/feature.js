import * as types from "../actions/features";
import { reducerUtils } from "../libs/asyncUtil";

export function features(state = reducerUtils.initial({}), action) {
  switch (action.type) {
    case types.CREATE_FEATURE:
      return reducerUtils.loading(state.data);
    case types.CREATE_FEATURE_SUCCESS:
      return reducerUtils.success({
        ...state.data,
        [action.payload.arm_id]: [
          ...(state.data?.[action.payload.arm_id] || []),
          action.payload,
        ]
          .slice()
          .sort((a, b) => a.id - b.id),
      });
    case types.CREATE_FEATURE_ERROR:
      return reducerUtils.error(action.payload, state.data);
    case types.CREATE_FEATURES:
      return reducerUtils.loading(state.data);
    case types.CREATE_FEATURES_SUCCESS:
      let newDataByCreate = { ...state.data };
      action.payload.map((v) => {
        newDataByCreate[v.arm_id] = [...(newDataByCreate?.[v.arm_id] || []), v]
          .slice()
          .sort((a, b) => a.id - b.id);
        return null;
      });
      return reducerUtils.success(newDataByCreate);
    case types.CREATE_FEATURES_ERROR:
      return reducerUtils.error(action.payload, state.data);
    case types.GET_FEATURES:
      return reducerUtils.loading(state.data);
    case types.GET_FEATURES_SUCCESS:
      let newStateByGet = { ...state.data };
      action.payload.map((v) => {
        newStateByGet[v.arm_id] = [
          ...(newStateByGet?.[v.arm_id] || []).filter((v2) => v2.id !== v.id),
          v,
        ]
          .slice()
          .sort((a, b) => a.id - b.id);
        return null;
      });
      return reducerUtils.success(newStateByGet);
    case types.GET_FEATURES_ERROR:
      return reducerUtils.error(action.payload, state.data);
    case types.UPDATE_FEATURE:
      return reducerUtils.loading(state.data);
    case types.UPDATE_FEATURE_SUCCESS:
      return reducerUtils.success({
        ...state.data,
        [action.payload.arm_id]: (
          state.data?.[action.payload.arm_id] || []
        ).map((v) => (v.id === action.payload.id ? action.payload : v)),
      });
    case types.UPDATE_FEATURE_ERROR:
      return reducerUtils.error(action.payload, state.data);
    case types.DELETE_FEATURE:
      return reducerUtils.loading(state.data);
    case types.DELETE_FEATURE_SUCCESS:
      return reducerUtils.success({
        ...state.data,
        [action.payload.arm_id]: (
          state.data?.[action.payload.arm_id] || []
        ).filter((v) => v.id !== action.payload.feature_id),
      });
    case types.DELETE_FEATURE_ERROR:
      return reducerUtils.error(action.payload, state.data);
    default:
      return state;
  }
}
