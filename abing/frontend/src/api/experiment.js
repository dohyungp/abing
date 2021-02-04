import axios from "axios";

export const getExperiments = async ({
  access_token,
  skip = 0,
  limit = 100,
}) => {
  const response = await axios.get("/api/v1/experiments/", {
    params: { skip, limit },
    headers: { Authorization: `Bearer ${access_token}` },
  });
  return response.data;
};

export const createExperiment = async (data) => {
  const response = await axios.post("/api/v1/experiments/", data, {
    headers: { Authorization: `Bearer ${data.access_token}` },
  });
  return response.data;
};

export const getExperiment = async ({ access_token, id }) => {
  const response = await axios.get(`/api/v1/experiments/${id}`, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
  return response.data;
};

export const updateExperiment = async (data) => {
  const response = await axios.put(`/api/v1/experiments/${data.id}`, data, {
    headers: { Authorization: `Bearer ${data.access_token}` },
  });
  return response.data;
};

export const deleteExperiment = async ({ access_token, id }) => {
  const response = await axios.delete(`/api/v1/experiments/${id}`, {
    headers: { Authorization: `Bearer ${access_token}` },
  });

  return response.data;
};
