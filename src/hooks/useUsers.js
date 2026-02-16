import { useEffect, useState } from "react";
import * as api from "../api/userService";

export const useUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.getUsers().then(setUsers);
  }, []);

  const addUser = async user => {
    const newUser = await api.createUser(user);
    setUsers(prev => [...prev, newUser]);
  };

  const updateUser = async (id, user) => {
    const updated = await api.updateUser(id, user);
    setUsers(prev =>
      prev.map(u => (u.id === id ? updated : u))
    );
  };

  const removeUser = async id => {
    await api.deleteUser(id);
    setUsers(prev => prev.filter(u => u.id !== id));
  };

  return { users, addUser, updateUser, removeUser };
};
