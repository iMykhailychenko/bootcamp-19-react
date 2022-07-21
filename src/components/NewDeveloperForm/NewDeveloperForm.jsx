import { Component } from 'react';

import PropTypes from 'prop-types';

// "id": 1,
// "firstName": "Марія",
// "lastName": "Руденко",
// "phone": "+38(097) 448 73 11",
// "city": "Полтава",
// "options": "Фронтенд розробник. Більше 5 років досвіду з Реактом",
// "isFullTime": true,
// "framework": "Angular"

const initialData = {
  firstName: '',
  lastName: '',
  phone: '',
  city: '',
  options: '',
  isFullTime: true,
  isRemote: true,
  framework: 'angular',
};

export class NewDeveloperForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = { ...initialData };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleChangeCheckbox = event => {
    const { name } = event.target;
    this.setState(prevState => ({ [name]: !prevState[name] }));
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);
  };

  render() {
    const { firstName, lastName, phone, city, options, isFullTime, framework, isRemote } = this.state;

    return (
      <form action="#" style={{ width: '100%', display: 'block' }} onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <label className="form-label d-block">
            <p>First Name</p>
            <input
              value={firstName}
              type="text"
              name="firstName"
              className="form-control"
              onChange={this.handleChange}
            />
          </label>
        </div>

        <div className="mb-3">
          <label className="form-label d-block">
            <p>Last Name</p>
            <input
              value={lastName}
              type="text"
              name="lastName"
              className="form-control"
              autoComplete="off"
              onChange={this.handleChange}
            />
          </label>
        </div>

        <div className="mb-3">
          <label className="form-label d-block">
            <p>Phone</p>
            <input
              value={phone}
              type="text"
              name="phone"
              className="form-control"
              autoComplete="off"
              onChange={this.handleChange}
            />
          </label>
        </div>

        <div className="mb-3">
          <label className="form-label d-block">
            <p>City</p>
            <input
              value={city}
              type="text"
              name="city"
              className="form-control"
              autoComplete="off"
              onChange={this.handleChange}
            />
          </label>
        </div>

        <div className="mb-3">
          <label className="form-label d-block">
            <p>Description</p>
            <textarea
              value={options}
              name="options"
              className="form-control"
              autoComplete="off"
              onChange={this.handleChange}
            />
          </label>
        </div>

        <div className="mb-3 form-check">
          <label className="form-check-label">
            <input
              checked={isFullTime}
              type="checkbox"
              name="isFullTime"
              className="form-check-input"
              onChange={this.handleChangeCheckbox}
            />
            Is full time
          </label>
        </div>

        <div className="mb-3 form-check">
          <label className="form-check-label">
            <input
              checked={isRemote}
              type="checkbox"
              name="isRemote"
              className="form-check-input"
              onChange={this.handleChangeCheckbox}
            />
            Is remote
          </label>
        </div>

        <div className="my-4">
          <div className="form-check">
            <label className="form-check-label">
              <input
                value="react"
                checked={framework === 'react'}
                className="form-check-input"
                type="radio"
                name="framework"
                onChange={this.handleChange}
              />
              React
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input
                value="vue"
                checked={framework === 'vue'}
                className="form-check-input"
                type="radio"
                name="framework"
                onChange={this.handleChange}
              />
              Vue
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input
                value="angular"
                checked={framework === 'angular'}
                className="form-check-input"
                type="radio"
                name="framework"
                onChange={this.handleChange}
              />
              Angular
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}
