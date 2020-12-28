import * as types from "../actions/users/auth";
import { reducerUtils } from "../libs/asyncUtil";

export default function auth(state = reducerUtils.initial(), action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return reducerUtils.loading(state.auth?.data);
    case types.LOGIN_SUCCESS:
      return reducerUtils.success(action.payload);
    case types.LOGIN_ERROR:
      return reducerUtils.error(action.payload);
    default:
      return state;
  }
}
