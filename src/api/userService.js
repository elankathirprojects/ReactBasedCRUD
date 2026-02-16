import axios from "axios";

const API = "http://localhost:3001/users";

export const getUsers = () =>
  axios.get(API).then(res => res.data);

export const createUser = user =>
  axios.post(API, user).then(res => res.data);

export const updateUser = (id, user) =>
  axios.put(`${API}/${id}`, user).then(res => res.data);

export const deleteUser = id =>
  axios.delete(`${API}/${id}`);
