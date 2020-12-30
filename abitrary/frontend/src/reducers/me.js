import * as types from "../actions/users/me";
import { reducerUtils } from "../libs/asyncUtil";

export default function me(state = reducerUtils.initial({}), action) {
  switch (action.type) {
    case types.GET_ME:
      return reducerUtils.loading(state?.data);
    case types.GET_ME_SUCCESS:
      return reducerUtils.success(action.payload);
    case types.GET_ME_ERROR:
      return reducerUtils.error(action.payload);
    default:
      return state;
  }
}
