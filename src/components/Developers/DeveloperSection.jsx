import { Component } from 'react';

import { Modal } from '../Modal/Modal';
import { NewDeveloperForm } from '../NewDeveloperForm/NewDeveloperForm';

import { DeveloperList } from './DeveloperList';

const DEVELOPERS_KEY = 'developers-key';

export class ErrorCatch extends Component {
  state = {
    isError: false,
  };

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
    if (error) {
      this.setState({ isError: true });
    }
  }

  render() {
    const { isError } = this.state;
    return isError ? <p className="my-5 p-5 alert alert-warning">Something went wrong!</p> : this.props.children;
  }
}

const applySearch = (developersList, search) => {
  return developersList.filter(developer => developer.firstName.toLowerCase().includes(search.toLowerCase()));
};

export class DeveloperSection extends Component {
  state = {
    isModalOpen: false,
    developersList: [],
    search: '',
  };

  componentDidMount() {
    // not good pattern
    // will return error if no data in localStorage. This error is catched in ErrorCatch component
    this.setState({ developersList: JSON.parse(localStorage.getItem(DEVELOPERS_KEY)) });

    // good pattern. catch error from where it appears
    // const localData = localStorage.getItem(DEVELOPERS_KEY);
    // if (localData) {
    //    this.setState({ developersList: JSON.parse(localData) });
    // }
  }

  componentDidUpdate(_, prevState) {
    const { developersList } = this.state;
    console.log('componentDidUpdate');

    if (developersList.length !== prevState.developersList.length) {
      console.log('update developers list');
      localStorage.setItem(DEVELOPERS_KEY, JSON.stringify(developersList));
    }

    // {} === {}
    // if (prevState.counter !== currentState.counter) {
    //   this.setState({})
    // }
  }

  handleSearchChange = event => {
    this.setState({ search: event.target.value });
  };

  handleReset = () => {
    this.setState({ search: '' });
  };

  handleToggle = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  handleSubmit = formData => {
    this.setState(prevState => ({
      isModalOpen: false,
      developersList: [...prevState.developersList, { ...formData, id: Date.now() }],
    }));
  };

  handleDelete = id => {
    this.setState(prevState => {
      return { developersList: prevState.developersList.filter(developer => developer.id !== id) };
    });
  };

  render() {
    const { isModalOpen, developersList, search } = this.state;
    const newDevelopersList = applySearch(developersList, search);

    return (
      <div style={{ overflow: 'hidden', position: 'relative' }}>
        <div className="input-group mb-3">
          <button className="btn btn-outline-secondary" type="button" onClick={this.handleReset}>
            Reset
          </button>
          <input
            type="text"
            value={search}
            onChange={this.handleSearchChange}
            className="form-control"
            placeholder="Search"
          />
        </div>

        <DeveloperList developersList={newDevelopersList} onDelete={this.handleDelete} />

        <button className="btn btn-primary" type="button" onClick={this.handleToggle}>
          Open modal
        </button>

        {isModalOpen && (
          <Modal onClose={this.handleToggle}>
            <NewDeveloperForm onSubmit={this.handleSubmit} />
          </Modal>
        )}
      </div>
    );
  }
}
