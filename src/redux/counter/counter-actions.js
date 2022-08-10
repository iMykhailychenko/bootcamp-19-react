import { createAction } from '@reduxjs/toolkit';

export const incrementAction = createAction('increment');
export const decrementAction = createAction('decrement');

export const stepAction = createAction('step');
