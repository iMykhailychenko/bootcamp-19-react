import { Link, useLocation } from 'react-router-dom';

import { cutString } from '../../helpers/cut-string';

export const PostCard = ({ post }) => {
  const { pathname } = useLocation();
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

          <div className="d-flex">
            <button type="button" className="btn btn-danger">
              Delete post
            </button>

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
