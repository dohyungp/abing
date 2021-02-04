import axios from "axios";

export const createArms = async ({ access_token, data }) => {
  const response = await axios.post("/api/v1/arms/bulk", data, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
  return response.data;
};

export const getArms = async ({
  access_token,
  skip = 0,
  limit = 100,
  experiment_id = null,
}) => {
  const response = await axios.get("/api/v1/arms/", {
    params: { skip, limit, experiment_id },
    headers: { Authorization: `Bearer ${access_token}` },
  });
  return response.data;
};

export const updateArm = async ({ access_token, data, id }) => {
  const response = await axios.put(`/api/v1/arms/${id}`, data, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
  return response.data;
};

export const deleteArm = async ({ access_token, id }) => {
  const response = await axios.delete(`/api/v1/arms/${id}`, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
  return response.data;
};
