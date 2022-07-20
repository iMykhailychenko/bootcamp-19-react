import { Component } from 'react';

import departments from '../../../assets/department.json';

export class DepartmentsList extends Component {
  state = {
    departments,
  };

  handleDelete = id => {
    this.setState(prevState => {
      return { departments: prevState.departments.filter(item => item.id !== id) /** => [{id: 2}, {id: 3}] */ };
    });
  };

  render() {
    return (
      <ul>
        {this.state.departments.map(item => (
          <li key={item.id}>
            <p>{item.name}</p>
            <button onClick={() => this.handleDelete(item.id)} type="button">
              delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
