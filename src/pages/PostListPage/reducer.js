export const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'post-status':
      return { ...state, status: payload };

    case 'post-data':
      return { ...state, posts: payload };

    case 'is-loading-more':
      return { ...state, isLoadMore: payload };

    default:
      return state;
  }
};
