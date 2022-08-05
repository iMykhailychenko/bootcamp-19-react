import { createAction } from '@reduxjs/toolkit';

export const incrementAction = createAction('increment');
// incrementAction.toString() -> 'increment'
// incrementAction.type -> 'increment'
export const decrementAction = createAction('decrement');

export const stepAction = createAction('step');

// export const action = createAction('action', ({ value, meta }) => ({
//   payload: value,
//   meta,
// }));
//
// console.log(action({ value: 100, meta: 200 }));
// -> { type: 'action', payload: value, meta: {}, test: 'data' }
