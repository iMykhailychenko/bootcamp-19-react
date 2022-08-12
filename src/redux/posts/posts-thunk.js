import { createAsyncThunk } from '@reduxjs/toolkit';

import { deletePostService, getPostsListService } from '../../services/posts-service';

export const getPostsThunk = createAsyncThunk('posts/getPosts', params => {
  return getPostsListService(params);
});

export const deletePostThunk = createAsyncThunk('posts/delete', async id => {
  await deletePostService(id);

  return id;
});
