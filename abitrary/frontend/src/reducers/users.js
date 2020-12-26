import * as types from "../actions/users/users";
import { reducerUtils, handleAsyncActions } from "../libs/asyncUtil";

const initialState = {
  users: reducerUtils.initial([]),
  user: reducerUtils.initial(),
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case types.GET_USERS:
    case types.GET_USERS_SUCCESS:
    case types.GET_USERS_ERROR:
      return handleAsyncActions(types.GET_USERS, "users", true)(state, action);
    case types.CREATE_USER:
    case types.CREATE_USER_SUCCESS:
    case types.CREATE_USER_ERROR:
      return handleAsyncActions(types.CREATE_USER, "user", true)(state, action);
    default:
      return state;
  }
}
