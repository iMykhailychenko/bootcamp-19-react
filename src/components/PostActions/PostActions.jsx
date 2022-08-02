import { useState } from 'react';

import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { deletePostService } from '../../services/posts-service';
import { Loader } from '../Loader/Loader';

export const PostActions = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = () => {
    setIsLoading(true);
    deletePostService(postId)
      .then(() => {
        toast.success('You have successfully deleted your post!');
        navigate('/posts');
      })
      .catch(() => {
        toast.error('Something went wrong!');
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      {isLoading && <Loader />}

      <div className="btn-group mb-5">
        <button type="button" className="btn btn-outline-danger" onClick={handleDelete}>
          Delete post
        </button>
        <button type="button" className="btn btn-outline-primary">
          Edit post
        </button>
      </div>
    </>
  );
};
