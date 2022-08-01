import './styles/index.css';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';

import { Content } from './components/Layout/Content/Content';
import { Main } from './components/Layout/Main/Main';
import { Sidebar } from './components/Layout/Sidebar/Sidebar';
import { Navigation } from './components/Navigation/Navigation';
import { AuthContextProvider } from './context/auth-context';
import { HomePage } from './pages/HomePage/HomePage';
// import { NotFound } from './pages/NotFound/NotFound';
// import { NewPostPage } from './pages/NewPostPage/NewPostPage';
// import { PostListPage } from './pages/PostListPage/PostListPage';
// import { PostCommentsPage } from './pages/PostCommentsPage/PostCommentsPage';
// import { SinglePostPage } from './pages/SinglePostPage/SinglePostPage';

export const App = () => {
  return (
    <>
      <Main>
        <AuthContextProvider>
          <Sidebar>
            <Navigation />
          </Sidebar>

          <Content>
            <HomePage />
            {/* <NotFound /> */}
            {/* <NewPostPage /> */}
            {/* <PostListPage /> */}
            {/* <SinglePostPage /> */}
            {/* <PostCommentsPage /> */}
          </Content>
        </AuthContextProvider>
      </Main>

      <ToastContainer />
    </>
  );
};
