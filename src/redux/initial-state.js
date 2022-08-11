import { authInitialState } from './auth/auth-initial-state';
import { commentsInitialState } from './comments/comments-initial-state';
import { postsInitialState } from './posts/posts-initial-state';
import { profileInitialState } from './profile/profile-intial-state';
import { singlePostInitialState } from './single-post/single-post-initial-state';

export const initialState = {
  singlePosts: singlePostInitialState,
  posts: postsInitialState,
  comments: commentsInitialState,
  auth: authInitialState,
  profile: profileInitialState,
};
