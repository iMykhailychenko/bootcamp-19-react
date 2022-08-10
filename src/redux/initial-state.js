import { commentsInitialState } from './comments/comments-initial-state';
import { counterInitialState } from './counter/counter-initial-state';
import { notesInitialState } from './notes/notes-initial-state';
import { postsInitialState } from './posts/posts-initial-state';
import { singlePostInitialState } from './single-post/single-post-initial-state';

export const initialState = {
  singlePosts: singlePostInitialState,
  posts: postsInitialState,
  comments: commentsInitialState,
  notes: notesInitialState,
  counter: counterInitialState,
};
