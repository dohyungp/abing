import * as types from "../actions/users/users";
import { reducerUtils } from "../libs/asyncUtil";

const initialState = {
  users: reducerUtils.initial([]),
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case types.GET_USERS:
      return {
        ...state,
        users: reducerUtils.loading(state.users?.data),
      };
    case types.GET_USERS_SUCCESS:
      return {
        ...state,
        users: reducerUtils.success(action.payload),
      };
    case types.GET_USERS_ERROR:
      return {
        ...state,
        users: reducerUtils.error(action.payload),
      };
    case types.CREATE_USER:
      return {
        ...state,
        users: reducerUtils.loading(state.users?.data),
      };
    case types.CREATE_USER_SUCCESS:
      return {
        ...state,
        users: reducerUtils.success([...state.users.data, action.payload]),
      };
    case types.CREATE_USER_ERROR:
      return {
        ...state,
        users: reducerUtils.error(action.payload, state.users.data),
      };
    default:
      return state;
  }
}
