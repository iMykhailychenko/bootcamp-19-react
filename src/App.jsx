import { Component } from 'react';
import './styles/index.css';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';

import { Content } from './components/Layout/Content/Content';
import { Main } from './components/Layout/Main/Main';
import { Sidebar } from './components/Layout/Sidebar/Sidebar';
import { Navigation } from './components/Navigation/Navigation';
import { PostList } from './components/PostList/PostList';
import { PostsSearch } from './components/PostsSearch/PostsSearch';

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
          <Sidebar>
            <Navigation />
          </Sidebar>

          <Content>
            <PostsSearch onSubmit={this.handleSubmit} />
            <PostList query={this.state.query} />
          </Content>
        </Main>

        <ToastContainer />
      </>
    );
  }
}
