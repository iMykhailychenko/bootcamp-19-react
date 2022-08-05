import { combineReducers } from '@reduxjs/toolkit';

import { counterReducer } from './counter/counter-reducer';
import { notesReducer } from './notes/notes-reducer';

export const reducer = combineReducers({
  counter: counterReducer,
  notes: notesReducer,
});
