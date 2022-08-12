import './styles/index.css';
import 'react-toastify/dist/ReactToastify.css';

import { lazy, Suspense, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Appear } from './components/Appear/Appear';
import { Layout } from './components/Layout/Layout';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { PublicRoute } from './components/PublicRoute/PublicRoute';
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
            <Appear key="home">
              <Suspense fallback={<p>Loading ...</p>}>
                <HomePage />
              </Suspense>
            </Appear>
          }
        />

        <Route
          path="/login"
          element={
            <Appear key="/login">
              <PublicRoute>
                <Suspense fallback={<p>Loading ...</p>}>
                  <LoginPage />
                </Suspense>
              </PublicRoute>
            </Appear>
          }
        />

        <Route
          path="/join"
          element={
            <Appear key="/join">
              <PublicRoute>
                <Suspense fallback={<p>Loading ...</p>}>
                  <JoinPage />
                </Suspense>
              </PublicRoute>
            </Appear>
          }
        />

        <Route
          path="/account"
          element={
            <Appear key="/account">
              <PrivateRoute>
                <Suspense fallback={<p>Loading ...</p>}>
                  <AccountPage />
                </Suspense>
              </PrivateRoute>
            </Appear>
          }
        />

        <Route
          path="/posts"
          element={
            <Appear key="/posts">
              <Suspense fallback={<p>Loading ...</p>}>
                <PostListPage />
              </Suspense>
            </Appear>
          }
        />

        <Route
          path="/posts/:postId"
          element={
            <Appear key="/profile/:postId">
              <Suspense fallback={<p>Loading ...</p>}>
                <SinglePostPage />
              </Suspense>
            </Appear>
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
            <Appear key="/new-post">
              <PrivateRoute>
                <Suspense fallback={<p>Loading ...</p>}>
                  <NewPostPage />
                </Suspense>
              </PrivateRoute>
            </Appear>
          }
        />

        <Route
          path="*"
          element={
            <Appear key="not-found">
              <Suspense fallback={<p>Loading ...</p>}>
                <NotFound />
              </Suspense>
            </Appear>
          }
        />
      </Route>
    </Routes>
  );
};
