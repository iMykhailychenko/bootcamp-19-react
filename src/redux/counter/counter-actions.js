import { INCREMENT, DECREMENT, STEP } from './counter-types';

export const incrementAction = () => ({ type: INCREMENT });
export const decrementAction = () => ({ type: DECREMENT });

export const stepAction = value => ({ type: STEP, payload: value });
