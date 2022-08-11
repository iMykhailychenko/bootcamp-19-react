import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { PostCard } from '../../components/PostCard/PostCard';
import { PostCardSkeleton } from '../../components/PostCard/PostCardSkeleton';
import { STATUS } from '../../constants/status';
import { getPostsThunk } from '../../redux/posts/posts-thunk';

export const PostListPage = () => {
  const dispatch = useDispatch();
  const { status, posts } = useSelector(state => state.posts);

  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page');

  useEffect(() => {
    dispatch(getPostsThunk({ page }));
  }, [dispatch, page]);

  const handlePageClick = newPage => {
    setSearchParams({ page: newPage });
  };

  if (status === STATUS.Error) {
    return <></>;
  }

  if (status === STATUS.Loading || status === STATUS.Idle) {
    return (
      <div className="container-fluid g-0">
        <div className="row ">
          {[...Array(6)].map((_, index) => (
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
      <div className="container-fluid g-0 pb-5 mb-5">
        <div className="row ">
          {posts?.data.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>

      <div className="btn-group my-5 mx-auto btn-group-lg pagination">
        {[...Array(posts.total_pages)].map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handlePageClick(index + 1)}
            className={Number(page) === index + 1 ? 'btn btn-secondary' : 'btn btn-primary'}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};
