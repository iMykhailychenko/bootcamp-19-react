import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { AuthContextProvider } from '../../context/auth-context';
import { BackButton } from '../BackButton/BackButton';
import { Navigation } from '../Navigation/Navigation';

import { Content } from './Content/Content';
import { Main } from './Main/Main';
import { Sidebar } from './Sidebar/Sidebar';

export const Layout = () => {
  return (
    <>
      <Main>
        <AuthContextProvider>
          <Sidebar>
            <Navigation />
          </Sidebar>

          <Content>
            <BackButton />
            <Outlet />
          </Content>
        </AuthContextProvider>
      </Main>

      <ToastContainer />
    </>
  );
};
