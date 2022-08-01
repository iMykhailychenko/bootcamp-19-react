import './styles/index.css';
import 'react-toastify/dist/ReactToastify.css';

import { Route, Routes } from 'react-router-dom';

import { Layout } from './components/Layout/Layout';
import { HomePage } from './pages/HomePage/HomePage';
import { NewPostPage } from './pages/NewPostPage/NewPostPage';
import { NotFound } from './pages/NotFound/NotFound';
import { PostCommentsPage } from './pages/PostCommentsPage/PostCommentsPage';
import { PostListPage } from './pages/PostListPage/PostListPage';
import { SinglePostPage } from './pages/SinglePostPage/SinglePostPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route path="/posts" element={<PostListPage />} />

        <Route path="/posts/:postId" element={<SinglePostPage />}>
          <Route path="comments" element={<PostCommentsPage />} />
        </Route>

        <Route path="/new-post" element={<NewPostPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
