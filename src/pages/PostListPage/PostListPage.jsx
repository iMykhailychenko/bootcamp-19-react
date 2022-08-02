import { useEffect, useReducer, useCallback, useMemo } from 'react';

import classNames from 'classnames';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { PostCard } from '../../components/PostCard/PostCard';
import { PostCardSkeleton } from '../../components/PostCard/PostCardSkeleton';
import { getPostsListService } from '../../services/posts-service';

import { initialState, STATUS } from './constants';
import { reducer } from './reducer';

export const PostListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParamsObj = useMemo(() => Object.fromEntries([...searchParams]), [searchParams]);

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
    fetchImages({ page: searchParamsObj.page });
  }, [fetchImages, searchParamsObj.page]);

  const handlePageClick = page => {
    setSearchParams({ ...searchParamsObj, page });
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

      <div className="btn-group my-5">
        {[...Array(state.posts.total_pages)].map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handlePageClick(index + 1)}
            disabled={Number(searchParamsObj.page) === index + 1}
            className={classNames('btn btn-primary ', state.isLoadMore ? 'disabled' : '')}
          >
            {state.isLoadMore && <span className="spinner-grow spinner-grow-sm mr-2" />}
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};
