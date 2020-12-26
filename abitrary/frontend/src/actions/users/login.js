export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_REQUEST_SUCCESS";
export const LOGIN_ERROR = "LOGIN_REQUEST_ERROR";

export function loginRequest(data) {
  return { type: LOGIN_REQUEST, payload: data };
}
