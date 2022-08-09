import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams, Outlet, Link, useLocation } from 'react-router-dom';

import { Loader } from '../../components/Loader/Loader';
import { PostActions } from '../../components/PostActions/PostActions';
import { STATUS } from '../../constants/status';
import { getSinglePostThunk } from '../../redux/single-post/single-post-thunk';

export const SinglePostPage = () => {
  const { postId } = useParams();
  const location = useLocation();

  const dispatch = useDispatch();
  const { status, postData } = useSelector(state => state.singlePost);

  useEffect(() => {
    dispatch(getSinglePostThunk(postId));
  }, [postId, dispatch]);

  if (status === STATUS.Loading || status === STATUS.Idle) {
    return <Loader />;
  }

  return (
    postData && (
      <>
        <PostActions />

        <img
          src={postData.image}
          alt={postData.title}
          className="img-fluid mb-4"
          style={{ maxHeight: '600px', width: '100%', objectFit: 'cover' }}
        />
        <h1 className="mb-5">{postData.title}</h1>

        <div dangerouslySetInnerHTML={{ __html: postData.content.replace(/\n/g, '<br/>') }} />

        <Link state={location.state} to={`/posts/${postId}/comments`} className="btn btn-primary my-4">
          Vew post comments
        </Link>

        <Outlet />
      </>
    )
  );
};
