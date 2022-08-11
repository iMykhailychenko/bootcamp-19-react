import axios from 'axios';

export const http = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '/api' : 'http://70.34.201.18:4444',
});

export const setAuthToken = token => {
  http.defaults.headers.Authorization = token;
};

export const deleteAuthToken = () => {
  delete http.defaults.headers.Authorization;
};
