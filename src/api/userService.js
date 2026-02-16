import axios from "axios";

// Local
// const API = "http://localhost:3001/users";

// Live
const API = "https://699312db8f29113acd3fe20a.mockapi.io/users";

export const getUsers = () =>
  axios.get(API).then(res => res.data);

export const createUser = user =>
  axios.post(API, user).then(res => res.data);

export const updateUser = (id, user) =>
  axios.put(`${API}/${id}`, user).then(res => res.data);

export const deleteUser = id =>
  axios.delete(`${API}/${id}`);

