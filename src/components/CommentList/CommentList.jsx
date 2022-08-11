import { useCallback, useEffect, useState } from 'react';

import { formatDistance } from 'date-fns';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { deleteCommentService, getCommentsListService } from '../../services/comments-service';

export const CommentList = ({ comments, setComments }) => {
  const { postId } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const fetchComments = useCallback(
    () =>
      getCommentsListService(postId)
        .then(setComments)
        .catch(() => {
          toast.error('Something went wrong!');
        }),
    [postId, setComments],
  );

  useEffect(() => {
    setIsLoading(true);
    fetchComments().finally(() => setIsLoading(false));
  }, [fetchComments]);

  const handleDeleteComment = commentId => {
    deleteCommentService(commentId)
      .then(() => {
        setComments(prev => ({ ...prev, data: prev.data.filter(item => item.id !== commentId) }));
        toast.success('You have successfully deleted your comment!');
      })
      .catch(() => {
        toast.error('Something went wrong!');
      });
  };

  if (isLoading) {
    return (
      <div className="spinner-border text-primary">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  if (!comments?.data?.length) {
    return <p>No comments yet!</p>;
  }

  return (
    <>
      <ul className="list-group">
        {comments.data.map(comment => (
          <li key={comment.id} className="list-group-item list-group-item-action d-flex gap-3 py-3">
            <img
              width="32"
              height="32"
              alt={comment.first_name}
              src={comment.avatar || '/user.png'}
              className="rounded-circle flex-shrink-0"
            />
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 className="mb-0">
                  <Link to={`/account/${comment.user_id}`}>
                    {comment.first_name} {comment.last_name}
                  </Link>
                </h6>
                <div
                  className="mb-4 mt-3"
                  dangerouslySetInnerHTML={{ __html: comment.content.replace(/\n/g, '<br/>') }}
                />

                <div className="d-flex" style={{ marginLeft: '-13px' }}>
                  <button
                    type="button"
                    className="btn btn-link text-secondary btn-sm"
                    onClick={() => handleDeleteComment(comment.id)}
                  >
                    Delete comment
                  </button>
                  <button type="button" className="btn btn-link text-secondary btn-sm">
                    Edit comment
                  </button>
                </div>
              </div>
              <small className="opacity-50 text-nowrap">
                {formatDistance(new Date(comment.created_at), new Date(), { addSuffix: true })}
              </small>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
