import { useState } from 'react';

export const PostsSearch = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    const { value } = event.target;
    setQuery(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(query);
  };

  return (
    <form className="input-group mb-3 w-50" onSubmit={handleSubmit}>
      <input
        value={query}
        type="search"
        placeholder="Search posts ..."
        className="form-control"
        onChange={handleChange}
      />
      <button className="btn btn-primary" type="submit" style={{ width: '150px' }}>
        Submit
      </button>
    </form>
  );
};

// const component = new PostsSearch()
// component.render() component.handleChange, component.handleSubmit

// export class PostsSearch extends Component {
//   state = {
//     query: '',
//     query2: '',
//   };
//
//   handleChange = event => {
//     this.setState({ query: event.target.value });
//   };
//
//   handleSubmit = () => {
//     const { onSubmit } = this.props;
//     onSubmit(this.state.query);
//   };
//
//   render() {
//     const { query } = this.state;
//     return (
//       <div className="input-group mb-3">
//         <button className="btn btn-outline-secondary" type="button" onClick={this.handleSubmit}>
//           Submit
//         </button>
//
//         <input value={query} type="text" className="form-control" placeholder="" onChange={this.handleChange} />
//       </div>
//     );
//   }
// }
