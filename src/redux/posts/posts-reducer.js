import { createSlice } from '@reduxjs/toolkit';

import { STATUS } from '../../constants/status';

import { postsInitialState } from './posts-initial-state';
import { getPostsThunk } from './posts-thunk';

const postsSlice = createSlice({
  name: 'posts',
  initialState: postsInitialState,
  extraReducers: {
    [getPostsThunk.pending /* -> 'posts/getPosts/pending' */]: state => {
      state.status = STATUS.Loading;
    },
    [getPostsThunk.fulfilled]: (state, actions) => {
      state.status = STATUS.Success;
      state.posts = actions.payload;
    },
    [getPostsThunk.rejected]: state => {
      state.status = STATUS.Error;
    },
  },
});

// {
//   'posts/getPosts/pending': () => {}
//   'posts/getPosts/fulfilled': () => {}
//   'posts/getPosts/rejected': () => {}
// }

export const postsReducer = postsSlice.reducer;
