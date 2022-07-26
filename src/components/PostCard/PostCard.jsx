import { cutString } from '../../helpers/cut-string';

export const PostCard = ({ post }) => {
  return (
    <div className="col-3 mb-4">
      <div className="card">
        <img src={post.preview_image} className="card-img-top" alt={post.title} height="200" />

        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>

          <p className="card-text">{cutString(post.content, 60)}</p>

          <button type="button" className="btn btn-primary">
            Read post
          </button>
        </div>
      </div>
    </div>
  );
};
