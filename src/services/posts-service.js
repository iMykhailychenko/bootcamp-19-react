import { http } from '../http/http';

const defaultParams = {
  limit: 9,
};

export const getPostsListService = async (params = {}) => {
  const { data } = await http.get('/posts', { params: { ...defaultParams, ...params } });
  return data;
};

export const createNewPostService = async body => {
  const { data } = await http.post('/posts', body);
  return data;
};

export const getSinglePostService = async (id, params) => {
  const { data } = await http.get(`/posts/${id}`, { params });
  return data;
};

export const deletePostService = id => {
  return http.delete(`/posts/${id}`);
};
