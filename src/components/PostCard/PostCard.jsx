import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import { cutString } from '../../helpers/cut-string';
import { deletePostThunk } from '../../redux/posts/posts-thunk';

export const PostCard = ({ post }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const profileId = useSelector(state => state.profile.data?.id);

  const handleDelete = () => {
    dispatch(deletePostThunk(post.id))
      .unwrap()
      .then(() => {
        toast.success('You have successfully deleted your post!');
      })
      .catch(() => {
        toast.error('Something went wrong!');
      });
  };

  return (
    <div className="col-12 col-xl-6 col-xxl-4 mb-4">
      <div className="card">
        <img
          height="250px"
          alt={post.title}
          src={post.preview_image}
          className="card-img-top"
          style={{ objectFit: 'cover' }}
        />

        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>

          <p className="card-text">{cutString(post.content, 60)}</p>

          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item">
              Author:{' '}
              <Link to={`/account/${post.user_id}`}>
                {post.first_name} {post.last_name}
              </Link>{' '}
            </li>
            <li className="list-group-item">Email: {post.email}</li>
            <li className="list-group-item">Views: {post.views}</li>
          </ul>

          <div className="d-flex">
            {post.user_id === profileId && (
              <button onClick={handleDelete} type="button" className="btn btn-danger">
                Delete post
              </button>
            )}

            <Link
              state={{ pathname, title: 'Go to posts list' }}
              to={`/posts/${post.id}`}
              className="btn btn-primary ms-3"
            >
              Read post
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
