import { useEffect, useMemo } from 'react';

import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { PostCard } from '../../components/PostCard/PostCard';
import { PostCardSkeleton } from '../../components/PostCard/PostCardSkeleton';
import { STATUS } from '../../constants/status';
import { getPostsThunk } from '../../redux/posts/posts-thunk';

export const PostListPage = () => {
  const dispatch = useDispatch();
  const { status, posts, isLoadMore } = useSelector(state => state.posts);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchParamsObj = useMemo(() => Object.fromEntries([...searchParams]), [searchParams]);

  useEffect(() => {
    dispatch(getPostsThunk({ page: searchParamsObj.page }));
  }, [dispatch, searchParamsObj.page]);

  const handlePageClick = page => {
    setSearchParams({ ...searchParamsObj, page });
  };

  if (status === STATUS.Error) {
    return <></>;
  }

  if (status === STATUS.Loading || status === STATUS.Idle) {
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

  if (!posts?.data.length) {
    return <p>No data</p>;
  }

  return (
    <>
      <div className="container-fluid g-0 mt-5">
        <div className="row ">
          {posts?.data.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>

      <div className="btn-group my-5">
        {[...Array(posts.total_pages)].map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handlePageClick(index + 1)}
            disabled={Number(searchParamsObj.page) === index + 1}
            className={classNames('btn btn-primary ', isLoadMore ? 'disabled' : '')}
          >
            {isLoadMore && <span className="spinner-grow spinner-grow-sm mr-2" />}
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};
