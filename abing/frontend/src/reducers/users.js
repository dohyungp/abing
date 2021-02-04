import * as types from "../actions/users/users";
import { reducerUtils } from "../libs/asyncUtil";

export default function users(state = reducerUtils.initial([]), action) {
  switch (action.type) {
    case types.GET_USERS:
      return reducerUtils.loading(state.data);
    case types.GET_USERS_SUCCESS:
      return reducerUtils.success(action.payload);
    case types.GET_USERS_ERROR:
      return reducerUtils.error(action.payload);
    case types.CREATE_USER:
      return reducerUtils.loading(state.data);
    case types.CREATE_USER_SUCCESS:
      return reducerUtils.success([...state.data, action.payload]);
    case types.CREATE_USER_ERROR:
      return reducerUtils.error(action.payload, state.data);
    default:
      return state;
  }
}
