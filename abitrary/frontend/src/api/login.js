import axios from "axios";

export const login = async ({ username, password }) => {
  let form = new FormData();
  form.append('username', username);
  form.append('password',password);
  const response = await axios.post("/api/v1/login", form);
  return response.data;
};
