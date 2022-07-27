import { useAuthContext } from '../../contenxt/auth-context';

import { PostList } from './PostList/PostList';

export const PostAuth = ({ ...props }) => {
  const [isAuth] = useAuthContext();

  return isAuth ? <PostList {...props} /> : 'Please authorize first';
};
