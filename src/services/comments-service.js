import { http } from '../http/http';

const defaultParams = {
  limit: 8,
};

export const createNewCommentService = async (postId, body) => {
  const { data } = await http.post(`/posts/${postId}/comments`, body);
  return data;
};

export const getCommentsListService = async (postId, params = {}) => {
  const { data } = await http.get(`/posts/${postId}/comments`, {
    params: { ...defaultParams, ...params },
  });
  return data;
};

export const deleteCommentService = async commentId => {
  return http.delete(`/comments/${commentId}`);
};
