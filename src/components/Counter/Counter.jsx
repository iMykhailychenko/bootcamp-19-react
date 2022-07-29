import { memo, useState, useCallback } from 'react';

// prevOnCount === onCount // true
const Button = memo(({ label, onCount }) => {
  console.log('Render in Button');

  return (
    <button type="button" className="btn btn-primary" onClick={onCount}>
      {label}
    </button>
  );
});

Button.displayName = 'Button';

// class Button extends PureComponent {
//   render() {
//     console.log('Render in Button');
//
//     return (
//       <button type="button" className="btn btn-primary" onClick={this.props.onCount}>
//         {this.props.label}
//       </button>
//     );
//   }
// }

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleCount = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  console.log('Render in Counter');

  return (
    <div className="container-fluid my-5">
      <p>{count}</p>
      <Button label="Click me" onCount={handleCount} />
    </div>
  );
};

// export class Counter extends Component {
//   state = {
//     count: 0,
//   };
//
//   handleCount = () => {
//     this.setState(prevState => ({ count: prevState.count + 1 }));
//   };
//
//   countTotalFeedback = () => {
//     const sum = Object.values(this.state);
//     return sum.reduce((acc, elem) => {
//       acc += elem;
//       return acc;
//     });
//   };
//
//   render() {
//     console.log('Render in Counter');
//     return (
//       <div className="container-fluid my-5">
//         <p>{this.state.count}</p>
//         <Button label="Click me" onCount={this.handleCount} />
//       </div>
//     );
//   }
// }
