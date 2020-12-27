import * as types from "../actions/users/me";
import { reducerUtils } from "../libs/asyncUtil";

const initialState = {
  me: reducerUtils.initial({}),
};

export default function me(state = initialState, action) {
  switch (action.type) {
    case types.GET_ME:
      return {
        ...state,
        me: reducerUtils.loading(state?.me?.data),
      };
    case types.GET_ME_SUCCESS:
      return {
        ...state,
        me: reducerUtils.success(action.payload),
      };
    case types.GET_ME_ERROR:
      return {
        ...state,
        me: reducerUtils.error(action.payload),
      };
    default:
      return state;
  }
}
