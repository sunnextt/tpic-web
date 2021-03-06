import axios from 'axios';
import ExpirySession from 'utils/expirysession';

const instance = axios.create({
  baseURL: 'https://api.tredkjlifters.com/api/v1/user',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

instance.interceptors.request.use(
  (config) => {
    const { data } = ExpirySession.get('user');

    if (data) {
      config.headers.Authorization = `Bearer ${data.access_token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);

export default instance;
