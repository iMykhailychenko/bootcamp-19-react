import { configureStore } from '@reduxjs/toolkit';

import { initialState } from './initial-state';
import { postsApi } from './posts/posts-api';
import { rootReducer } from './reducer';

export const store = configureStore({
  initialState,
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development' /* true */,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(postsApi.middleware);
  },
});
