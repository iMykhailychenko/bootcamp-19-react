import './styles/index.css';
import 'react-toastify/dist/ReactToastify.css';

import { lazy, Suspense, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './components/Layout/Layout';
import { getAccessTokenSelector } from './redux/auth/auth-selectors';
import { getProfileThunk } from './redux/profile/profile-thunk';

const LoginPage = lazy(() => import('./pages/Auth/LoginPage'));
const JoinPage = lazy(() => import('./pages/Auth/JoinPage'));
const AccountPage = lazy(() => import('./pages/AccountPage'));
const NewPostPage = lazy(() => import('./pages/NewPostPage'));
const NotFound = lazy(() => import('./pages/NotFound'));
const PostCommentsPage = lazy(() => import('./pages/PostCommentsPage'));
const SinglePostPage = lazy(() => import('./pages/SinglePostPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const PostListPage = lazy(() => import('./pages/PostListPage'));

export const App = () => {
  const dispatch = useDispatch();
  const accountToken = useSelector(getAccessTokenSelector);

  useEffect(() => {
    dispatch(getProfileThunk());
  }, [dispatch, accountToken]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<p>Loading ...</p>}>
              <HomePage />
            </Suspense>
          }
        />

        <Route
          path="/login"
          element={
            <Suspense fallback={<p>Loading ...</p>}>
              <LoginPage />
            </Suspense>
          }
        />

        <Route
          path="/join"
          element={
            <Suspense fallback={<p>Loading ...</p>}>
              <JoinPage />
            </Suspense>
          }
        />

        <Route
          path="/account"
          element={
            <Suspense fallback={<p>Loading ...</p>}>
              <AccountPage />
            </Suspense>
          }
        />

        <Route
          path="/posts"
          element={
            <Suspense fallback={<p>Loading ...</p>}>
              <PostListPage />
            </Suspense>
          }
        />

        <Route
          path="/posts/:postId"
          element={
            <Suspense fallback={<p>Loading ...</p>}>
              <SinglePostPage />
            </Suspense>
          }
        >
          <Route
            path="comments"
            element={
              <Suspense fallback={<p>Loading ...</p>}>
                <PostCommentsPage />
              </Suspense>
            }
          />
        </Route>

        <Route
          path="/new-post"
          element={
            <Suspense fallback={<p>Loading ...</p>}>
              <NewPostPage />
            </Suspense>
          }
        />

        <Route
          path="*"
          element={
            <Suspense fallback={<p>Loading ...</p>}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};
