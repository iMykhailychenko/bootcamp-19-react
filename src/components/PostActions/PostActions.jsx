import { useState } from 'react';

import { toast } from 'react-toastify';

import { deletePostService } from '../../services/posts-service';
import { Loader } from '../Loader/Loader';

export const PostActions = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = () => {
    setIsLoading(true);
    deletePostService(9)
      .then(() => {
        toast.success('You have successfully deleted your post!');
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
