import { useEffect, useState } from 'react';
// setQuery -> PostsSearch()
export const PostsSearch = ({ onSubmit }) => {
  // query
  const [query, setQuery] = useState('');
  const [query2, setQuery2] = useState('');

  const changeState = {
    query: setQuery,
    query2: setQuery2,
  };

  useEffect(() => {
    console.log('hello world');
    // done

    return () => {
      console.log('After hello world');
    };
  }, [query]);

  const handleChange = event => {
    const { name, value } = event.target;
    changeState[name](value);
  };

  const handleSubmit = () => onSubmit(query);

  return (
    <>
      <p>query: {query}</p>
      <p>query2: {query2}</p>

      <div className="input-group mb-3">
        <button className="btn btn-outline-secondary" type="button" onClick={handleSubmit}>
          Submit
        </button>

        <input
          value={query}
          type="text"
          name="query"
          className="form-control"
          placeholder="query"
          onChange={handleChange}
        />
        <input
          value={query2}
          type="text"
          name="query2"
          className="form-control"
          placeholder="query2"
          onChange={handleChange}
        />
      </div>
    </>
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
