import { getRequest } from "api";

export const fetchDrinks = async () => {
  const { data: response } = await getRequest("/menu/drinks");
  return response;
};

export const fetchClassics = async () => {
  const { data: response } = await getRequest("/menu/classics");
  return response;
};

export const fetchFood = async () => {
  const { data: response } = await getRequest("/menu/food");
  return response;
};
