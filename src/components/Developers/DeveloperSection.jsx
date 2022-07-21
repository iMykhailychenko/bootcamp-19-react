import { Component } from 'react';

import developersJson from '../../assets/developers.json';
import { Modal } from '../Modal/Modal';
import { NewDeveloperForm } from '../NewDeveloperForm/NewDeveloperForm';

import { DeveloperList } from './DeveloperList';

export class DeveloperSection extends Component {
  state = {
    isModalOpen: false,
    developersList: developersJson,
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

  render() {
    const { isModalOpen, developersList } = this.state;

    return (
      <>
        <DeveloperList developersList={developersList} />

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
