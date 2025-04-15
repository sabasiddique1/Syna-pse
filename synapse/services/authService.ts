import axios from 'axios';

const API_URL = 'http://localhost:4000/auth'; // Backend base URL

export const register = async (email, password, name) => {
  const response = await axios.post(`${API_URL}/register`, { email, password, name });
  return response.data;
};

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data;
};

export const getToken = () => {
  return localStorage.getItem('access_token');
};

export const setToken = (token) => {
  localStorage.setItem('access_token', token);
};

export const logout = () => {
  localStorage.removeItem('access_token');
};
