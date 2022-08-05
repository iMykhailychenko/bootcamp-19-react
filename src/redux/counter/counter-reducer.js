import { createReducer } from '@reduxjs/toolkit';

import { incrementAction, decrementAction, stepAction } from './counter-actions';
import { counterInitialState } from './counter-initial-state';

// incrementAction.toString() -> 'increment'
// incrementAction.type -> 'increment'

export const counterReducer = createReducer(counterInitialState, {
  [incrementAction]: state => ({ ...state, value: state.value + state.step }), // [...state]
  [decrementAction]: state => ({ ...state, value: state.value - state.step }),
  [stepAction]: (state, { payload }) => ({ ...state, step: payload }),
});

// state = { value: 0,  step: 1 }
// export const counterReducer = (state = counterInitialState, { type, payload }) => {
//
//   const obj = {
//     [INCREMENT]: state => ({ ...state, value: state.value + state.step }),
//     [DECREMENT]: state => ({ ...state, value: state.value + state.step }),
//     [STEP]: state => ({ ...state, value: state.value + state.step }),
//   }
//
//   obj[type](state)
//
//
//   switch (type) {
//     case INCREMENT:
//       return { ...state, value: state.value + state.step };
//
//     case DECREMENT:
//       return { ...state, value: state.value - state.step };
//
//     case STEP:
//       return { ...state, step: payload };
//
//     default:
//       return state;
//   }
// };
