import axios from 'axios';

const defaultParams = {
  limit: 4,
};

const commentsApiClient = axios.create({
  baseURL: 'http://70.34.201.18:8080/',
});

export const createNewCommentService = async (postId, body) => {
  const { data } = await commentsApiClient.post(`/posts/${postId}/comments`, body);
  return data;
};

export const getCommentsListService = async (postId, params = {}) => {
  const { data } = await commentsApiClient.get(`/posts/${postId}/comments`, {
    params: { ...defaultParams, ...params },
  });
  return data;
};

export const deleteCommentService = async commentId => {
  return commentsApiClient.delete(`/comments/${commentId}`);
};
