import { useEffect, useReducer, useCallback } from 'react';

import classNames from 'classnames';
import { toast } from 'react-toastify';

import { PostCard } from '../../components/PostCard/PostCard';
import { PostCardSkeleton } from '../../components/PostCard/PostCardSkeleton';
import { getPostsListService } from '../../services/posts-service';

const STATUS = {
  Idle: 'idle',
  Loading: 'loading',
  Error: 'error',
  Success: 'success',
};

const initialState = {
  isLoadMore: false,
  status: STATUS.Idle,
  posts: null,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'post-status':
      return { ...state, status: payload };

    case 'post-data':
      return { ...state, posts: payload };

    case 'load-more-posts':
      return { ...state, posts: { ...payload, data: [...state.posts.data, ...payload.data] } };

    case 'is-loading-more':
      return { ...state, isLoadMore: payload };

    default:
      return state;
  }
};

export const PostListPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchImages = useCallback(
    params =>
      getPostsListService(params)
        .then(data => {
          dispatch({ type: 'post-data', payload: data });
          dispatch({ type: 'post-status', payload: STATUS.Success });
        })
        .catch(() => {
          dispatch({ type: 'post-status', payload: STATUS.Error });
          toast.error('Something went wrong!');
        }),
    [],
  );

  useEffect(() => {
    dispatch({ type: 'post-status', payload: STATUS.Loading });

    fetchImages();
  }, [fetchImages]);

  const handleLoadMore = () => {
    dispatch({ type: 'is-loading-more', payload: true });

    getPostsListService({ page: state.posts.page + 1 })
      .then(response => {
        dispatch({ type: 'load-more-posts', payload: response });
      })
      .catch(() => toast.error('Something went wrong!'))
      .finally(() => dispatch({ type: 'is-loading-more', payload: false }));
  };

  if (state.status === STATUS.Error) {
    return <></>;
  }

  if (state.status === STATUS.Loading || state.status === STATUS.Idle) {
    return (
      <div className="container-fluid g-0">
        <div className="row ">
          {[...Array(4)].map((_, index) => (
            <PostCardSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (!state.posts?.data.length) {
    return <p>No data</p>;
  }

  return (
    <>
      <div className="container-fluid g-0 mt-5">
        <div className="row ">
          {state.posts?.data.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>

      {state.posts.total_pages > state.posts.page && (
        <button
          type="button"
          onClick={handleLoadMore}
          className={classNames('btn btn-primary my-5', state.isLoadMore ? 'disabled' : '')}
        >
          {state.isLoadMore && <span className="spinner-grow spinner-grow-sm mr-2" />}
          Load more
        </button>
      )}
    </>
  );
};
