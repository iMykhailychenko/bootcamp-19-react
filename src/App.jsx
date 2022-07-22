import { Component } from 'react';
import './styles/index.css';

import { Card } from './components/Card/Card';
import { DeveloperSection } from './components/Developers/DeveloperSection';
import { Content } from './components/Layout/Content/Content';
import { Main } from './components/Layout/Main/Main';
import { Sidebar } from './components/Layout/Sidebar/Sidebar';
import { Navigation } from './components/Navigation/Navigation';
import { Voute } from './components/Voute/Voute';

export class App extends Component {
  render() {
    return (
      <Main>
        <Sidebar>
          <Navigation />
        </Sidebar>

        <Content>
          <DeveloperSection />

          <Voute />
          <Card />
        </Content>
      </Main>
    );
  }
}
