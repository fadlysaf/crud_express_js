import axios from "axios";

const API_URL = "http://localhost:5000/users";

export const getUsers = async () => {
  return axios.get(API_URL);
};

export const createUser = async (userData: { name: string; email: string }) => {
  return axios.post(API_URL, userData);
};

export const updateUser = async (
  id: number,
  userData: { name: string; email: string },
) => {
  return axios.put(`${API_URL}/${id}`, userData);
};

export const deleteUser = async (id: number) => {
  return axios.delete(`${API_URL}/${id}`);
};
