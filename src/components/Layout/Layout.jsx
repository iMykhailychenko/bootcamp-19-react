import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Navigation } from '../Navigation/Navigation';

import { Content } from './Content/Content';
import { Main } from './Main/Main';
import { Sidebar } from './Sidebar/Sidebar';

export const Layout = () => {
  return (
    <>
      <Main>
        <Sidebar>
          <Navigation />
        </Sidebar>

        <Content>
          <Outlet />
        </Content>
      </Main>

      <ToastContainer />
    </>
  );
};
