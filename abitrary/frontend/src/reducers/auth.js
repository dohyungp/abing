import * as types from "../actions/users/auth";
import { reducerUtils } from "../libs/asyncUtil";

export default function auth(state = reducerUtils.initial(), action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return reducerUtils.loading(state.data);
    case types.LOGIN_SUCCESS:
      return reducerUtils.success(action.payload);
    case types.LOGIN_ERROR:
      return reducerUtils.error(action.payload);
    case types.LOGOUT_REQUEST:
      return reducerUtils.loading(state.data);
    case types.LOGOUT_SUCCESS:
      // when user want try logout client just remove the token. but in future the logout will be handled in server side also.
      return reducerUtils.success(null);
    case types.LOGOUT_ERROR:
      return reducerUtils.error(state.data);
    default:
      return state;
  }
}
