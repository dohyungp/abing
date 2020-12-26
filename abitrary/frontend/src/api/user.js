import axios from "axios";

export const login = async ({ username, password }) => {
  let form = new FormData();
  form.append("username", username);
  form.append("password", password);
  const response = await axios.post("/api/v1/login/", form);
  return response.data;
};

export const getUsers = async ({ access_token, skip = 0, limit = 100 }) => {
  const response = await axios.get("/api/v1/users/", {
    params: { skip, limit },
    headers: { Authorization: `Bearer ${access_token}` },
  });
  return response.data;
};

export const createUser = async (data) => {
  const response = await axios.post("/api/v1/users/", data, {
    headers: { Authorization: `Bearer ${data.access_token}` },
  });
  return response.data;
};

export const getMe = async ({ access_token }) => {
  const response = await axios.get("/api/v1/users/", {
    headers: { Authorization: `Bearer ${access_token}` },
  });
  return response.data;
};

export const updateMe = async ({ access_token }, data) => {
  const response = await axios.put("/api/v1/users/", data, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
  return response.data;
};
