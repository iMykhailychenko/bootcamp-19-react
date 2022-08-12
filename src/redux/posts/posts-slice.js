import { createSlice } from '@reduxjs/toolkit';

import { STATUS } from '../../constants/status';

import { postsInitialState } from './posts-initial-state';
import { deletePostThunk, getPostsThunk } from './posts-thunk';

const postsSlice = createSlice({
  name: 'posts',
  initialState: postsInitialState,
  extraReducers: {
    [getPostsThunk.pending]: state => {
      state.status = STATUS.Loading;
    },
    [getPostsThunk.fulfilled]: (state, actions) => {
      state.status = STATUS.Success;
      state.posts = actions.payload;
    },
    [getPostsThunk.rejected]: state => {
      state.status = STATUS.Error;
    },

    [deletePostThunk.fulfilled]: (state, actions) => {
      state.posts.data = state.posts.data.filter(post => post.id !== actions.payload);
    },
  },
});

export const postsReducer = postsSlice.reducer;
