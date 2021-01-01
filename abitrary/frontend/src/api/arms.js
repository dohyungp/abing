import axios from "axios";

export const createArms = async ({ access_token, data }) => {
  console.log(data);
  const response = await axios.post("/api/v1/arms/bulk", data, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
  return response.data;
};
