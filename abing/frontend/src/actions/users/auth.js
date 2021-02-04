export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_REQUEST_SUCCESS";
export const LOGIN_ERROR = "LOGIN_REQUEST_ERROR";
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_REQUEST_SUCCESS";
export const LOGOUT_ERROR = "LOGOUT_REQUEST_ERROR";

export function loginRequest(data) {
  return { type: LOGIN_REQUEST, payload: data };
}

export function logoutRequest(data) {
  return { type: LOGOUT_REQUEST, payload: data };
}
