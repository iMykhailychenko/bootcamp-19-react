import { createAsyncThunk } from '@reduxjs/toolkit';

import { getPostsListService } from '../../services/posts-service';

// export const getPostsThunk = () => async dispatch => {
//   dispatch({ type: 'posts/getPostsLoading' });
//   try {
//     const posts = await getPostsListService();
//     dispatch({ type: 'posts/getPostsSuccess', payload: posts });
//   } catch (error) {
//     dispatch({ type: 'posts/getPostsError' });
//   }
// };

export const getPostsThunk = createAsyncThunk('posts/getPosts', params => {
  return getPostsListService(params);
});

// 'posts/getPosts/pending'
// 'posts/getPosts/fulfilled'
// 'posts/getPosts/rejected'
