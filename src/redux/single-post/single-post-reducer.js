import { createSlice } from '@reduxjs/toolkit';

import { STATUS } from '../../constants/status';

import { singlePostInitialState } from './single-post-initial-state';
import { getSinglePostThunk } from './single-post-thunk';

const singlePostSlice = createSlice({
  name: 'singlePost',
  initialState: singlePostInitialState,
  extraReducers: {
    [getSinglePostThunk.pending]: state => {
      state.status = STATUS.Loading;
    },
    [getSinglePostThunk.fulfilled]: (state, actions) => {
      state.status = STATUS.Success;
      state.postData = actions.payload;
    },
    [getSinglePostThunk.rejected]: state => {
      state.status = STATUS.Error;
    },
  },
});

export const singlePostReducer = singlePostSlice.reducer;
