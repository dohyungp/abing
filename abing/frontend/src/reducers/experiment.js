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
    case types.UPDATE_EXPERIMENT:
      return reducerUtils.loading(state.data);
    case types.UPDATE_EXPERIMENT_SUCCESS:
      return reducerUtils.success(
        state.data.map((v) =>
          v.id === action.payload.id ? action.payload : v,
        ),
      );
    case types.UPDATE_EXPERIMENT_ERROR:
      return reducerUtils.error(state.data);
    case types.DELETE_EXPERIMENT:
      return reducerUtils.loading(state.data);
    case types.DELETE_EXPERIMENT_SUCCESS:
      return reducerUtils.success(
        state.data.filter((v) => v.id !== action.payload.id),
      );
    case types.DELETE_EXPERIMENT_ERROR:
      return reducerUtils.error(state.data);

    default:
      return state;
  }
}

export function experiment(state = reducerUtils.initial({}), action) {
  switch (action.type) {
    case types.CREATE_EXPERIMENT:
      return reducerUtils.loading(state.data);
    case types.CREATE_EXPERIMENT_SUCCESS:
      return reducerUtils.success({
        ...state.data,
        [action.payload.id]: action.payload,
      });
    case types.CREATE_EXPERIMENT_ERROR:
      return reducerUtils.error(action.payload, state.data);
    case types.GET_EXPERIMENT:
      return reducerUtils.loading(state.data);
    case types.GET_EXPERIMENT_SUCCESS:
      return reducerUtils.success({
        ...state.data,
        [action.payload.id]: action.payload,
      });
    case types.GET_EXPERIMENT_ERROR:
      return reducerUtils.error(action.payload, state.data);
    case types.UPDATE_EXPERIMENT:
      return reducerUtils.loading(state.data);
    case types.UPDATE_EXPERIMENT_SUCCESS:
      return reducerUtils.success({
        ...state.data,
        [action.payload.id]: action.payload,
      });
    case types.UPDATE_EXPERIMENT_ERROR:
      return reducerUtils.error(state.data);
    case types.DELETE_EXPERIMENT:
      return reducerUtils.loading(state.data);
    case types.DELETE_EXPERIMENT_SUCCESS:
      let { [action.payload.id]: value, ...others } = state.data;
      return reducerUtils.success(others);
    case types.DELETE_EXPERIMENT_ERROR:
      return reducerUtils.error(state.data);
    default:
      return state;
  }
}
