import { createReducer } from '@reduxjs/toolkit';

import { incrementAction, decrementAction, stepAction } from './counter-actions';
import { counterInitialState } from './counter-initial-state';

export const counterReducer = createReducer(counterInitialState, {
  [incrementAction]: state => ({ ...state, value: state.value + state.step }),
  [decrementAction]: state => ({ ...state, value: state.value - state.step }),
  [stepAction]: (state, { payload }) => ({ ...state, step: payload }),
});
