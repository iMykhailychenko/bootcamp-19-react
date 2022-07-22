import { Component } from 'react';

import styles from './Voute.module.css';
import { VouteOptions } from './VouteOptions';

const options = [
  { name: 'iphone', title: 'IPhone', id: 1, className: styles.iphone },
  { name: 'nokia', title: 'Nokia', id: 3, className: styles.nokia },
  { name: 'android', title: 'Android', id: 2, className: styles.android },
];

export class Voute extends Component {
  state = {
    iphone: 1,
    nokia: 2,
    android: 3,
  };

  handleChange = event => {
    const { name } = event.target; // name -> nokia

    this.setState(prevState => {
      const prevStateValue = prevState[name]; // -> nokia -> 2

      return { [name /* nokia */]: prevStateValue /* 2 */ + 1 /* 2 + 1 = 3 */ };
      /* return { nokia: prevStateValue + 1 } */
    });

    // this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  render() {
    const { android, iphone, nokia } = this.state;
    return (
      <>
        <div>iphone {iphone}</div>
        <div>nokia {nokia}</div>
        <div>android {android}</div>

        <VouteOptions options={options} onFeedback={this.handleChange} />
      </>
    );
  }
}
