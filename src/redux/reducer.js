import { combineReducers } from 'redux';

import { counterReducer } from './counter/counter-reducer';
import { notesReducer } from './notes/notes-reducer';

export const reducer = combineReducers({
  counter: counterReducer,
  notes: notesReducer,
});

// export const reducer = (state, { type, payload }) => {
//   switch (type) {
//     case INCREMENT:
//       return { ...state, counter: { ...state.counter, value: state.counter + state.counter.step } };
//
//     case DECREMENT:
//       return { ...state, counter: { ...state.counter, value: state.counter - state.counter.step } };
//
//     case STEP:
//       return { ...state, counter: { ...state.counter, step: payload } };
//
//     default:
//       return state;
//   }
// };
