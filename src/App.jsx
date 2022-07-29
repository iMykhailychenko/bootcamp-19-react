import { Component } from 'react';
import './styles/index.css';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';

import { Content } from './components/Layout/Content/Content';
import { Main } from './components/Layout/Main/Main';
import { Sidebar } from './components/Layout/Sidebar/Sidebar';
import { Navigation } from './components/Navigation/Navigation';
import { PostsAuth } from './components/Posts/PostsAuth/PostsAuth';
import { PostsSearch } from './components/Posts/PostsSearch/PostsSearch';
import { AuthContextProvider } from './context/auth-context';

export class App extends Component {
  state = {
    query: '',
  };

  handleSubmit = query => {
    this.setState({ query });
  };

  render() {
    return (
      <>
        <Main>
          <AuthContextProvider>
            <Sidebar>
              <Navigation />
            </Sidebar>

            <Content>
              <PostsSearch onSubmit={this.handleSubmit} />
              <PostsAuth query={this.state.query} />
            </Content>
          </AuthContextProvider>
        </Main>

        <ToastContainer />
      </>
    );
  }
}
