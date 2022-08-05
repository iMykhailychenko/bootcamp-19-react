import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { createNoteAction, deleteNoteAction, filterAction, toggleNoteAction } from './notes-actions';
import { notesInitialState } from './notes-initial-state';

const notesFilterReducer = createReducer(notesInitialState.filter, {
  [filterAction]: (_, action) => action.payload,
});

const notesListReducer = createReducer(notesInitialState.notesList, {
  [createNoteAction]: (state, action) => [action.payload, ...state],
  [deleteNoteAction]: (state, action /* action.payload -> id */) => state.filter(note => note.id !== action.payload),
  [toggleNoteAction]: (state, action /* action.payload -> id */) =>
    state.map(note => (note.id === action.payload ? { ...note, isDone: !note.isDone } : note)),
});

const persistConfig = {
  key: 'todos',
  storage,
  whitelist: ['notesList'],
};

export const notesReducer = persistReducer(
  persistConfig,
  combineReducers({
    filter: notesFilterReducer,
    notesList: notesListReducer,
  }),
);
