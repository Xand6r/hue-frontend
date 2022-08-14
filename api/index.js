const axios = require("axios");
const BASE_URL =
  process.env.ENVIRONMENT === "local" ? "http://localhost:3000/api" : "/api";

export const getRequest = (path) => {
  return axios.get(`${BASE_URL}${path}`);
};
