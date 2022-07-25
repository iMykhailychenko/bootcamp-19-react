import { Component } from 'react';
import './styles/index.css';

import { Banner } from './components/Banner/Banner';
import { Counter } from './components/Counter/Counter';
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
          <Banner />

          <Counter />

          <DeveloperSection />
        </Content>
      </Main>
    );
  }
}
