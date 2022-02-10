import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.tredkjlifters.com/api/v1/user',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Access-Control-Allow-Methods': 'GET, OPTIONS, POST, PUT',
  },
});

export default instance;
