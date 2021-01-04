import axios from "axios";

export const createFeature = async ({ access_token, data }) => {
  const response = await axios.post("/api/v1/features/", data, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
  return response.data;
};

export const getFeatures = async ({
  access_token,
  skip = 0,
  limit = 100,
  arm_id = null,
}) => {
  const response = await axios.get("/api/v1/features/", {
    params: { skip, limit, arm_id },
    headers: { Authorization: `Bearer ${access_token}` },
  });
  return response.data;
};

export const updateFeature = async ({ access_token, data, id }) => {
  const response = await axios.put(`/api/v1/features/${id}`, data, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
  return response.data;
};

export const deleteFeature = async ({ access_token, id }) => {
  const response = await axios.delete(`/api/v1/features/${id}`, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
  return response.data;
};
