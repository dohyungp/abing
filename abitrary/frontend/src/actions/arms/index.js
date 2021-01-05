export const CREATE_ARMS = "CREATE_ARMS";
export const CREATE_ARMS_SUCCESS = "CREATE_ARMS_SUCCESS";
export const CREATE_ARMS_ERROR = "CREATE_ARMS_ERROR";
export const GET_ARMS = "GET_ARMS";
export const GET_ARMS_SUCCESS = "GET_ARMS_SUCCESS";
export const GET_ARMS_ERROR = "GET_ARMS_ERROR";
export const UPDATE_ARM = "UPDATE_ARM";
export const UPDATE_ARM_SUCCESS = "UPDATE_ARM_SUCCESS";
export const UPDATE_ARM_ERROR = "UPDATE_ARM_ERROR";
export const DELETE_ARM = "DELETE_ARM";
export const DELETE_ARM_SUCCESS = "DELETE_ARM_SUCCESS";
export const DELETE_ARM_ERROR = "DELETE_ARM_ERROR";

export function createArms(data) {
  return { type: CREATE_ARMS, payload: data };
}

export function getArms(data) {
  return { type: GET_ARMS, payload: data };
}

export function updateArm(data) {
  return { type: UPDATE_ARM, payload: data };
}

export function deleteArm(data) {
  return { type: DELETE_ARM, payload: data };
}
