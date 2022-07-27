import { Component } from 'react';
import './styles/index.css';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';

import { Banner } from './components/Banner/Banner';
import { Content } from './components/Layout/Content/Content';
import { Main } from './components/Layout/Main/Main';
import { Sidebar } from './components/Layout/Sidebar/Sidebar';
import { Modal } from './components/Modal/Modal';
import { Navigation } from './components/Navigation/Navigation';
import { PostAuth } from './components/Posts/PostAuth';
import { PostsSearch } from './components/Posts/PostsSearch/PostsSearch';
import { AuthContextProvider } from './contenxt/auth-context';

export class App extends Component {
  state = {
    query: '',
    isOpen: false,
  };

  handleSubmit = query => {
    this.setState({ query });
  };

  handleToggleModal = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    return (
      <AuthContextProvider>
        <Main>
          <Sidebar>
            <Navigation />
          </Sidebar>

          <Content>
            <button type="button" onClick={this.handleToggleModal}>
              Open modal
            </button>
            <Banner />

            <PostsSearch onSubmit={this.handleSubmit} />
            <PostAuth query={this.state.query} />

            {this.state.isOpen && (
              <Modal onClose={this.handleToggleModal}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad aliquid aspernatur at cupiditate debitis
                deserunt, dolorum error est et maxime nobis obcaecati omnis placeat quam quisquam, temporibus tenetur
                vitae?
              </Modal>
            )}
          </Content>
        </Main>

        <ToastContainer />
      </AuthContextProvider>
    );
  }
}
