import { http } from '../http/http';

export const createUserService = body => {
  return http.post('/users/create', body);
};

export const loginUserService = async body => {
  const { data } = await http.post('/users/login', body);
  return data;
};

export const getUsersService = async () => {
  const { data } = await http.get('/users/profile');
  return data;
};
