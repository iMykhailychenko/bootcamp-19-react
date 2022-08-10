import { createSelector } from '@reduxjs/toolkit';

export const notesListSelector = state => state.notes.notesList;
export const filterSelector = state => state.notes.filter;

// export const filteredNotesSelector = state => {
//   const notes = notesListSelector(state);
//   const filter = filterSelector(state);
//
//   return notes.filter(({ value }) => value.toLowerCase().includes(filter.trim().toLowerCase()));
// };

export const filteredNotesSelector = createSelector(filterSelector, notesListSelector, (search, notes) => {
  return notes.filter(({ value }) => value.toLowerCase().includes(search.trim().toLowerCase())); // A [{}, {}] -> B [{}]
});

export const nodesDataSelector = createSelector(notesListSelector, filterSelector, (notes, search) => {
  return { notes, search };
});

// const obj = {}
// const obj2 = obj
// obj2 === obj // true
// {} === {} // false
//
