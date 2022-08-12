import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { deletePostThunk } from '../../redux/posts/posts-thunk';
import { Loader } from '../Loader/Loader';

export const PostActions = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const authorId = useSelector(state => state.singlePost.postData.user_id);
  const profileId = useSelector(state => state.profile.data?.id);

  const handleDelete = () => {
    setIsLoading(true);

    dispatch(deletePostThunk(postId))
      .unwrap()
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

      {authorId === profileId && (
        <div className="btn-group mb-5 d-block">
          <button type="button" className="btn btn-outline-danger" onClick={handleDelete}>
            Delete post
          </button>

          <button type="button" className="btn btn-outline-primary">
            Edit post
          </button>
        </div>
      )}
    </>
  );
};
