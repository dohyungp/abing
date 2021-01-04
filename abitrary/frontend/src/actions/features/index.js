export const CREATE_FEATURE = "CREATE_FEATURE";
export const CREATE_FEATURE_SUCCESS = "CREATE_FEATURE_SUCCESS";
export const CREATE_FEATURE_ERROR = "CREATE_FEATURE_ERROR";
export const GET_FEATURES = "GET_FEATURES";
export const GET_FEATURES_SUCCESS = "GET_FEATURES_SUCCESS";
export const GET_FEATURES_ERROR = "GET_FEATURES_ERROR";
export const UPDATE_FEATURE = "UPDATE_FEATURE";
export const UPDATE_FEATURE_SUCCESS = "UPDATE_FEATURE_SUCCESS";
export const UPDATE_FEATURE_ERROR = "UPDATE_FEATURE_ERROR";
export const DELETE_FEATURE = "DELETE_FEATURE";
export const DELETE_FEATURE_SUCCESS = "DELETE_FEATURE_SUCCESS";
export const DELETE_FEATURE_ERROR = "DELETE_FEATURE_ERROR";

export function createFeature(data) {
  return { type: CREATE_FEATURE, payload: data };
}

export function getFeatures(data) {
  return { type: GET_FEATURES, payload: data };
}

export function updateFeature(data) {
  return { type: UPDATE_FEATURE, payload: data };
}

export function deleteFeature(data) {
  return { type: DELETE_FEATURE, payload: data };
}
