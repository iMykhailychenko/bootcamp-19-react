import { useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';

import { PostCard } from '../../components/PostCard/PostCard';
import { PostCardSkeleton } from '../../components/PostCard/PostCardSkeleton';
import { useGetPostsQuery, useDeletePostMutation } from '../../redux/posts/posts-api';

export const PostListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page');

  const { refetch, ...posts } = useGetPostsQuery(page);
  const [onDeletePost] = useDeletePostMutation();

  useEffect(() => {
    refetch(page);
  }, [refetch, page]);

  const handlePageClick = newPage => {
    setSearchParams({ page: newPage });
  };

  if (posts.isError) {
    return <></>;
  }

  if (posts.isLoading) {
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

  if (!posts.data?.data.length) {
    return <p>No data</p>;
  }

  return (
    <>
      <div className="container-fluid g-0">
        <div className="row ">
          {posts.data?.data.map(post => (
            <PostCard key={post.id} post={post} onDelete={onDeletePost} />
          ))}
        </div>
      </div>

      <div className="btn-group my-5 mx-auto btn-group-lg">
        {[...Array(posts.data.total_pages)].map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handlePageClick(index + 1)}
            disabled={Number(page) === index + 1}
            className="btn btn-primary"
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};
