export const STATUS = {
  Idle: 'idle',
  Loading: 'loading',
  Error: 'error',
  Success: 'success',
};

export const initialState = {
  isLoadMore: false,
  status: STATUS.Idle,
  posts: null,
};
