import { combineReducers } from 'redux';

import { notesInitialState } from './notes-initial-state';
import { FILTER } from './notes-type';

const notesFilterReducer = (state = notesInitialState.filter, { type, payload }) => {
  switch (type) {
    case FILTER:
      return payload;

    default:
      return state;
  }
};

const notesListReducer = (state = notesInitialState.notesList, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

export const notesReducer = combineReducers({
  filter: notesFilterReducer,
  notesList: notesListReducer,
});
