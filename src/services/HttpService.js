import axios from "axios";

export function fetchUsers() {
  return axios.get(`http://localhost:3001/users`);
}

export function addUser({ userData }) {
  return axios.post(`http://localhost:3001/addUser`, userData);
}

export function editUser({ userData }) {
  return axios.put(`http://localhost:3001/updateUser/${userData.id}`, userData);
}

export function deleteUser({ userData }) {
  return axios.delete(`http://localhost:3001/deleteUser/${userData.id}`);
}
