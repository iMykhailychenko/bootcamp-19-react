import { combineReducers } from 'redux';

import { authReducer } from './auth/auth-slice';
import { commentsReducer } from './comments/comments-slice';
import { postsReducer } from './posts/posts-slice';
import { profileReducer } from './profile/profile-slice';
import { singlePostReducer } from './single-post/single-post-slice';

export const rootReducer = combineReducers({
  singlePost: singlePostReducer,
  posts: postsReducer,
  comments: commentsReducer,
  auth: authReducer,
  profile: profileReducer,
});
