const axios = require("axios");
const BASE_URL = "http://localhost:8000";

export const getRequest = (path) => {
  return axios.get(`${BASE_URL}${path}`);
};
