import { publicApi, privateApi } from '../http/http';

const defaultParams = {
  limit: 9,
};

export const getPostsListService = async (params = {}) => {
  const { data } = await publicApi.get('/posts', { params: { ...defaultParams, ...params } });
  return data;
};

export const createNewPostService = async body => {
  const { data } = await privateApi.post('/posts', body);
  return data;
};

export const getSinglePostService = async (id, params) => {
  const { data } = await publicApi.get(`/posts/${id}`, { params });
  return data;
};

export const deletePostService = id => {
  return privateApi.delete(`/posts/${id}`);
};
