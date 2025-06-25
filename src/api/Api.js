import axios from 'axios';
import { data } from 'react-router';

const ApiFormData = axios.create({
  baseURL: 'http://localhost:5005',
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});


const Api = axios.create({
  baseURL: 'http://localhost:5005',
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});


export const createUserApi = (data) => ApiFormData.post("/api/user/createUser", data);
export const loginUserApi = (data) => Api.post("/api/user/login", data);
