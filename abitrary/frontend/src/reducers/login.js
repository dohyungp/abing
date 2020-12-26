import * as types from "../actions/users/login";
import { reducerUtils, handleAsyncActions } from "../libs/asyncUtil";

const initialState = {
  login: reducerUtils.initial(),
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
    case types.LOGIN_SUCCESS:
    case types.LOGIN_ERROR:
      return handleAsyncActions(
        types.LOGIN_REQUEST,
        "login",
        true,
      )(state, action);
    default:
      return state;
  }
}
