import * as types from "../actions/users/auth";
import { reducerUtils } from "../libs/asyncUtil";

const initialState = {
  auth: reducerUtils.initial(),
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        auth: reducerUtils.loading(state.auth?.data),
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        auth: reducerUtils.success(action.payload),
      };
    case types.LOGIN_ERROR:
      return {
        ...state,
        auth: reducerUtils.error(action.payload),
      };
    default:
      return state;
  }
}
