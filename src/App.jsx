import './styles/index.css';
import 'react-toastify/dist/ReactToastify.css';

import { lazy, Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';

import { Layout } from './components/Layout/Layout';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { NewPostPage } from './pages/NewPostPage/NewPostPage';
import { NotFound } from './pages/NotFound/NotFound';
import { PostCommentsPage } from './pages/PostCommentsPage/PostCommentsPage';
import { SinglePostPage } from './pages/SinglePostPage/SinglePostPage';

const HomePageLazy = lazy(() => import('./pages/HomePage'));
const PostListPageLazy = lazy(() => import('./pages/PostListPage'));
const NotesPageLazy = lazy(() => import('./pages/NotesPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={null}>
              <HomePageLazy />
            </Suspense>
          }
        />

        <Route
          path="/notes"
          element={
            <PrivateRoute>
              <Suspense fallback={<p>Loading ...</p>}>
                <NotesPageLazy />
              </Suspense>
            </PrivateRoute>
          }
        />

        <Route
          path="/posts"
          element={
            <PrivateRoute>
              <Suspense fallback={<p>Loading ...</p>}>
                <PostListPageLazy />
              </Suspense>
            </PrivateRoute>
          }
        />

        <Route
          path="/posts/:postId"
          element={
            <PrivateRoute>
              <SinglePostPage />
            </PrivateRoute>
          }
        >
          <Route path="comments" element={<PostCommentsPage />} />
        </Route>

        <Route
          path="/new-post"
          element={
            <PrivateRoute>
              <NewPostPage />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
