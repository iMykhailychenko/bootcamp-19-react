import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { STATUS } from '../../constants/status';
import { getProfileThunk } from '../profile/profile-thunk';

import { authInitialState } from './auth-initial-state';
import { loginThunk } from './auth-thubk';

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    logoutAction: state => {
      state.status = STATUS.Idle;
      state.access_token = '';
      state.token_type = '';
    },
  },
  extraReducers: {
    [loginThunk.pending]: state => {
      state.status = STATUS.Loading;
    },
    [loginThunk.fulfilled]: (state, { payload }) => {
      state.status = STATUS.Success;
      state.access_token = payload.access_token;
      state.token_type = payload.token_type;
    },
    [loginThunk.rejected]: state => {
      state.status = STATUS.Error;
    },

    [getProfileThunk.fulfilled]: state => {
      state.status = STATUS.Success;
    },
    [getProfileThunk.rejected]: state => {
      state.status = STATUS.Error;
      state.access_token = '';
      state.token_type = '';
    },
  },
});

export const { logoutAction } = authSlice.actions;

const persistConfig = {
  key: 'auth',
  storage,
  blacklist: ['status'],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
