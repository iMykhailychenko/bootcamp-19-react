import { createSlice } from '@reduxjs/toolkit';

import { STATUS } from '../../constants/status';

import { profileInitialState } from './profile-intial-state';
import { getProfileThunk, updateAccountThunk } from './profile-thunk';

const profileSlice = createSlice({
  name: 'profile',
  initialState: profileInitialState,
  extraReducers: {
    [getProfileThunk.pending]: state => {
      state.status = STATUS.Loading;
    },
    [getProfileThunk.fulfilled]: (state, { payload }) => {
      state.status = STATUS.Success;
      state.data = payload;
    },
    [getProfileThunk.rejected]: state => {
      state.status = STATUS.Error;
    },

    [updateAccountThunk.fulfilled]: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export const profileReducer = profileSlice.reducer;
