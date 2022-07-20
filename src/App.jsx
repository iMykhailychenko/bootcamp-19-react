import { Component } from 'react';
import './styles/index.css';

import PropTypes from 'prop-types';

import { Content } from './components/Layout/Content/Content';
import { DepartmentsList } from './components/Layout/DepartmentsList/DepartmentsList';
import { Main } from './components/Layout/Main/Main';
import { Sidebar } from './components/Layout/Sidebar/Sidebar';
import { Modal } from './components/Modal/Modal';

// class Component {
//   ....
//
//   setState(state) {
//     this.nextState = {...this.prevState, ...state}
//     this.render()
//   }
// }

export class App extends Component {
  static defaultProps = {
    counter: 10,
  };

  static propTypes = {
    counter: PropTypes.number,
  };

  state = {
    isModalOpen: false,
    counter: this.props.counter,
    counter2: 3,
  };

  handleToggle = () => {
    this.setState(prevState => {
      return { isModalOpen: !prevState.isModalOpen };
    });
  };

  handleCount = () => {
    this.setState(prevState => {
      return { counter: prevState.counter + 1 };
    });
  };

  handleCount2 = () => {
    this.setState(prevState => {
      if (prevState.counter2 > 0) {
        return { counter2: prevState.counter2 - 1 };
      }
      return { counter2: prevState.counter2 };
    });
  };

  render() {
    const { isModalOpen, counter, counter2 } = this.state;

    return (
      <Main>
        <Sidebar />
        <Content>
          <button type="button" className="btn btn-primary" onClick={this.handleToggle}>
            Open modal
          </button>

          <div className="py-2">
            <button type="button" className="btn btn-primary" onClick={this.handleCount}>
              +1
            </button>
            <p>{counter}</p>
          </div>

          <div className="py-2">
            <button type="button" className="btn btn-primary" onClick={this.handleCount2}>
              -1
            </button>
            <p>{counter2}</p>
          </div>

          <DepartmentsList />
        </Content>

        {isModalOpen && <Modal onClose={this.handleToggle} />}
      </Main>
    );
  }
}
