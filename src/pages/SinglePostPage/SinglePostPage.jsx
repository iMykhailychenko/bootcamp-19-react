import { useEffect, useState } from 'react';

import { toast } from 'react-toastify';

import { Loader } from '../../components/Loader/Loader';
import { PostActions } from '../../components/PostActions/PostActions';
import { getSinglePostService } from '../../services/posts-service';

export const SinglePostPage = () => {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    getSinglePostService(9)
      .then(setPost)
      .catch(() => {
        toast.error('Something went wrong!');
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    post && (
      <>
        <PostActions />

        <img
          src={post.image}
          alt={post.title}
          className="img-fluid mb-4"
          style={{ maxHeight: '600px', width: '100%', objectFit: 'cover' }}
        />
        <h1 className="mb-5">{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }} />
      </>
    )
  );
};
