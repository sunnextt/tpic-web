import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://178.128.253.236:8080/api/v1/user',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Access-Control-Allow-Methods': 'GET, OPTIONS, POST, PUT',
  },
});

export default instance;
