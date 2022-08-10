import { configureStore } from '@reduxjs/toolkit';

import { initialState } from './initial-state';
import { rootReducer } from './reducer';

export const store = configureStore({
  initialState,
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development' /* true */,
});
