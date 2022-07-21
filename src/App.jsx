import { Component } from 'react';
import './styles/index.css';

import { DeveloperSection } from './components/Developers/DeveloperSection';
import { Content } from './components/Layout/Content/Content';
import { Main } from './components/Layout/Main/Main';
import { Sidebar } from './components/Layout/Sidebar/Sidebar';
import { Navigation } from './components/Navigation/Navigation';

export class App extends Component {
  render() {
    return (
      <Main>
        <Sidebar>
          <Navigation />
        </Sidebar>

        <Content>
          <DeveloperSection />
        </Content>
      </Main>
    );
  }
}
