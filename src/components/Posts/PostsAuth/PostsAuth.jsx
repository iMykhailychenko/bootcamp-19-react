import { useContext } from 'react';

import { AuthContext } from '../../../context/auth-context';
import { PostList } from '../PostList/PostList';

export const PostsAuth = ({ ...props }) => {
  const { isAuth } = useContext(AuthContext);

  return isAuth ? <PostList {...props} /> : 'Not authenticated';
};
