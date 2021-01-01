export const CREATE_ARMS = "CREATE_ARMS";
export const CREATE_ARMS_SUCCESS = "CREATE_ARMS_SUCCESS";
export const CREATE_ARMS_ERROR = "CREATE_ARMS_ERROR";

export function createArms(data) {
  return { type: CREATE_ARMS, payload: data };
}
