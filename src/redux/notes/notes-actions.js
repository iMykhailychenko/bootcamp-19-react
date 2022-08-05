import { createAction } from '@reduxjs/toolkit';

export const filterAction = createAction('notes/filter');

export const createNoteAction = createAction('notes/create-note', value => ({
  payload: {
    value,
    id: Date.now(),
    time: Date.now(),
    isDone: false,
  },
}));

// createNoteAction(100) -> { type 'create-note', payload: 100 }
// createNoteAction(100) -> { type 'create-note', payload: { id: Date.now(), value: 100, time: Date.now(), isDone: false }}

export const deleteNoteAction = createAction('notes/delete-note');
export const toggleNoteAction = createAction('notes/toggle-note');
