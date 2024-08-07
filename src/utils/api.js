import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

export const fetchChristmasProducts = async () => {
  const response = await axios.get("/api/christmas-products/");
  return response.data;
};

export const fetchEasterProducts = async () => {
  const response = await axios.get("/api/easter-products/");
  return response.data;
};

export const fetchValentineProducts = async () => {
  const response = await axios.get("/api/valentine-products/");
  return response.data;
};

export const fetchMiscellaneousProducts = async () => {
  const response = await axios.get("/api/miscellaneous-products/");
  return response.data;
};

export const fetchBookProducts = async () => {
  const response = await axios.get("/api/book-products/");
  return response.data;
};

export const addToFavorites = async () => {
  const response = await axios.post("api/favorites/");
  return response.data;
};

export const getAllFavorites = async () => {
  const response = await axios.get("api/favorites/");
  return response.data;
};

export const removeFromFavorites = async (id) => {
  try {
    const response = await axios.delete(`api/favorites/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error removing favorites:", error);
    throw error;
  }
};

export const updateUser = async (newData) => {
  const response = await axios.put(`api/auth/users/${newData}`);
  return response.data;
};
