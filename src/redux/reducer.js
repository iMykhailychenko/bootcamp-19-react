import { combineReducers } from 'redux';

import { commentsReducer } from './comments/comments-slice';
import { counterReducer } from './counter/counter-reducer';
import { notesReducer } from './notes/notes-slice';
import { postsReducer } from './posts/posts-slice';
import { singlePostReducer } from './single-post/single-post-slice';

export const rootReducer = combineReducers({
  singlePost: singlePostReducer,
  posts: postsReducer,
  comments: commentsReducer,
  notes: notesReducer,
  counter: counterReducer,
});
