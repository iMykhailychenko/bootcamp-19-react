import { Component } from 'react';

export class PostsSearch extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = () => {
    const { onSubmit } = this.props;
    onSubmit(this.state.query);
  };

  render() {
    const { query } = this.state;
    return (
      <div className="input-group mb-3">
        <button className="btn btn-outline-secondary" type="button" onClick={this.handleSubmit}>
          Submit
        </button>

        <input value={query} type="text" className="form-control" placeholder="" onChange={this.handleChange} />
      </div>
    );
  }
}
