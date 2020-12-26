import * as types from "../actions/users/users";
import { reducerUtils, handleAsyncActions } from "../libs/asyncUtil";

const initialState = {
  users: reducerUtils.initial(),
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case types.GET_USERS:
    case types.GET_USERS_SUCCESS:
    case types.GET_USERS_ERROR:
      return handleAsyncActions(types.GET_USERS, "users", true)(state, action);
    default:
      return state;
  }
}
