import { createAsyncThunk } from '@reduxjs/toolkit';

import { getPostsListService } from '../../services/posts-service';

export const getPostsThunk = createAsyncThunk('posts/getPosts', params => {
  return getPostsListService(params);
});
