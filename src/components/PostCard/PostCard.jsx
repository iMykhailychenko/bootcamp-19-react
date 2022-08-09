import { Link, useLocation } from 'react-router-dom';

import { cutString } from '../../helpers/cut-string';

export const PostCard = ({ post }) => {
  const { pathname } = useLocation();
  return (
    <div className="col-4 mb-4">
      <div className="card">
        <img src={post.preview_image} className="card-img-top" alt={post.title} height="300" />

        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>

          <p className="card-text">{cutString(post.content, 60)}</p>

          <Link state={{ pathname, title: 'Go to posts list' }} to={`/posts/${post.id}`} className="btn btn-primary">
            Read post
          </Link>
        </div>
      </div>
    </div>
  );
};
