import axios from 'axios';

export const privateApi = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '/api' : 'http://70.34.201.18:4444',
});

export const publicApi = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '/api' : 'http://70.34.201.18:4444',
});

export const setAuthToken = token => {
  privateApi.defaults.headers.common.Authorization = token;
};

export const deleteAuthToken = () => {
  delete privateApi.defaults.headers.common.Authorization;
};
