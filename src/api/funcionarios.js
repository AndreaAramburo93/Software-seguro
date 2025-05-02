import axios from 'axios';

const API_URL = 'http://localhost:3000/funcionarios'; // Cambia la URL según tu backend

export const getFuncionarios = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createFuncionario = async (funcionario) => {
  const response = await axios.post(API_URL, funcionario);
  return response.data;
};

export const updateFuncionario = async (id, funcionario) => {
  const response = await axios.put(`${API_URL}/${id}`, funcionario);
  return response.data;
};

export const deleteFuncionario = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};