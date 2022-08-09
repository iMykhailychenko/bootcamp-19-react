import { combineReducers } from 'redux';

import { commentsReducer } from './comments/comments-reducer';
import { postsReducer } from './posts/posts-reducer';
import { singlePostReducer } from './single-post/single-post-reducer';

export const rootReducer = combineReducers({
  singlePost: singlePostReducer,
  posts: postsReducer,
  comments: commentsReducer,
});
