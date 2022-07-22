import { Component } from 'react';

import developersJson from '../../assets/developers.json';
import { Modal } from '../Modal/Modal';
import { NewDeveloperForm } from '../NewDeveloperForm/NewDeveloperForm';

import { DeveloperList } from './DeveloperList';

/* developersList + search => filteredDevelopers */
const applySearch = (developersList, search) => {
  // arr.map
  // arr.reduce
  // arr.find
  // arr.filter
  // arr.some
  // arr.every
  // arr.forEach

  // search == 'ія'
  // [{Марія}, {Іван}, {}].filter -> 1 developer -> developer.name == 'марія' -> new [{Марія}]
  return developersList.filter(developer => developer.firstName.toLowerCase().includes(search.toLowerCase())); // firstName = 'Марія' includes ''
};

export class DeveloperSection extends Component {
  state = {
    isModalOpen: false,
    developersList: developersJson,
    search: '',
  };

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
      // [{id: 1},{id: 2},{id: 3}] => filter id 1 !== 1 => [{id: 2}, {id: 3}]
      return { developersList: prevState.developersList.filter(developer => developer.id !== id) };
    });
  };

  render() {
    const { isModalOpen, developersList, search } = this.state;

    // (developersList (firstName) + filter) -> filteredDevelopersList
    const newDevelopersList = applySearch(developersList, search);

    return (
      <>
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
      </>
    );
  }
}
