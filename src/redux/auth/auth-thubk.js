import { createAsyncThunk } from '@reduxjs/toolkit';

import { setAuthToken } from '../../http/http';
import { loginUserService } from '../../services/users-service';

export const loginThunk = createAsyncThunk('auth/login', async payload => {
  const data = await loginUserService(payload);
  setAuthToken(`${data.token_type} ${data.access_token}`);

  return data;
});
