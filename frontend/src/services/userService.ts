import axios from "axios";

const API_URL = "http://localhost:5000/users";

export const getUsers = () => axios.get(API_URL);

export const createUser = (data: any) => axios.post(API_URL, data);

export const updateUser = (id: number, data: any) =>
  axios.put(`${API_URL}/${id}`, data);

export const deleteUser = (id: number) => axios.delete(`${API_URL}/${id}`);
