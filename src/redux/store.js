import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './reducer';
import { singlePostInitialState } from './single-post/single-post-initial-state';

export const store = configureStore({
  reducer: rootReducer,
  initialState: singlePostInitialState,
  devTools: process.env.NODE_ENV === 'development' /* true */,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});
