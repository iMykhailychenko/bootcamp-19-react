import { createAction, createSlice } from '@reduxjs/toolkit';

import { notesInitialState } from './notes-initial-state';

export const createNoteAction = createAction('notes/create-note', value => ({
  payload: {
    value,
    id: Date.now(),
    time: Date.now(),
    isDone: false,
  },
}));

const notesSlice = createSlice({
  name: 'notes',
  initialState: notesInitialState,
  reducers: {
    filterAction: (state, action) => {
      state.filter = action.payload;
    },
    deleteNoteAction: (state, action) => {
      state.notesList = state.notesList.filter(note => note.id !== action.payload);
    },
    toggleNoteAction: (state, action) => {
      state.notesList = state.notesList.map(note =>
        note.id === action.payload ? { ...note, isDone: !note.isDone } : note,
      );
    },
  },
  extraReducers: {
    [createNoteAction]: (state, action) => {
      state.notesList.unshift(action.payload);
    },
  },
});

export const { filterAction, deleteNoteAction, toggleNoteAction } = notesSlice.actions;
export const notesReducer = notesSlice.reducer;
