export const GET_ME = "GET_ME";
export const GET_ME_SUCCESS = "GET_ME_SUCCESS";
export const GET_ME_ERROR = "GET_ME_ERROR";

export function getMe(data) {
  return { type: GET_ME, payload: data };
}
