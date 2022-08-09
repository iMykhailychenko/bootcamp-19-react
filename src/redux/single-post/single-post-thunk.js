import { createAsyncThunk } from '@reduxjs/toolkit';

import { getSinglePostService } from '../../services/posts-service';

export const getSinglePostThunk = createAsyncThunk('singlePost/getSinglePost', postId => {
  return getSinglePostService(postId);
});
