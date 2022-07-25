import { Component, PureComponent } from 'react';

class Button extends PureComponent {
  render() {
    console.log('Console in Button');
    return (
      <button onClick={this.props.onCount} className="btn btn-primary" type="button">
        this.props.label
      </button>
    );
  }
}

export class Counter extends Component {
  state = {
    count: 0,
  };

  handleCount = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  render() {
    const { count } = this.state;
    console.log('Console in Counter');

    return (
      <div>
        <p>{count}</p>
        <Button onCount={this.handleCount} />
      </div>
    );
  }
}
