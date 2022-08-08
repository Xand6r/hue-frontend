const axios = require("axios");
const BASE_URL = "/api";

export const getRequest = (path) => {
  return axios.get(`${BASE_URL}${path}`);
};
