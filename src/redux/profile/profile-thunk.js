import { createAsyncThunk } from '@reduxjs/toolkit';

import { setAuthToken } from '../../http/http';
import { getUsersService } from '../../services/users-service';
import { getAccessTokenSelector, getTokenTypeSelector } from '../auth/auth-selectors';

export const getProfileThunk = createAsyncThunk('profile/get-profile', async (_, { getState, rejectWithValue }) => {
  const accessToken = getAccessTokenSelector(getState());
  const tokenType = getTokenTypeSelector(getState());

  if (accessToken) {
    try {
      setAuthToken(`${tokenType} ${accessToken}`); // 'Bearer sdvsdvefvrve'
      return await getUsersService();
    } catch (error) {
      return rejectWithValue(error);
    }
  }

  return rejectWithValue();
});
