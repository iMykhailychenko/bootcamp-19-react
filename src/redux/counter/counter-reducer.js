import { counterInitialState } from './counter-initial-state';
import { INCREMENT, DECREMENT, STEP } from './counter-types';

// state = { value: 0,  step: 1 }
export const counterReducer = (state = counterInitialState, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return { ...state, value: state.value + state.step };

    case DECREMENT:
      return { ...state, value: state.value - state.step };

    case STEP:
      return { ...state, step: payload };

    default:
      return state;
  }
};
