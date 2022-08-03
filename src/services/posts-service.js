import axios from 'axios';

const defaultParams = {
  limit: 4,
};

const postsApiClient = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '/api/posts' : 'http://70.34.201.18:8080/posts',
});

export const getPostsListService = async (params = {}) => {
  const { data } = await postsApiClient.get('', { params: { ...defaultParams, ...params } });
  return data;
};

export const createNewPostService = async body => {
  const { data } = await postsApiClient.post('', body);
  return data;
};

export const getSinglePostService = async (id, params) => {
  const { data } = await postsApiClient.get(`/${id}`, { params });
  return data;
};

export const deletePostService = id => {
  return postsApiClient.delete(`/${id}`);
};
