const axios = require("axios");
const BASE_URL = "https://hue-frontend.vercel.app/api";

export const getRequest = (path) => {
  return axios.get(`${BASE_URL}${path}`);
};
