import axios from 'axios';

const defaultParams = {
  limit: 4,
};

const postsApiClient = axios.create({
  baseURL: 'http://70.34.201.18:8080/posts',
  params: defaultParams,
});

export const getPostsListService = async params => {
  const { data } = await postsApiClient.get('', { params });
  return data;
};
