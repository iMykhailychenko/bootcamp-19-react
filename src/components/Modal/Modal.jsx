import { Component } from 'react';

import PropTypes from 'prop-types';

export class Modal extends Component {
  static defaultProps = {
    onClose: PropTypes.func.isRequired,
  };

  state = {
    plus: 0,
    minus: 100,
  };

  handleCount = event => {
    const { name } = event.target;

    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  render() {
    const { onClose } = this.props;
    const { plus, minus } = this.state;

    return (
      <>
        <div className="modal-backdrop fade show" />

        <div className="modal fade show" style={{ display: 'block' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">My modal</h5>

                <button type="button" className="btn-close" onClick={onClose} />
              </div>

              <div className="modal-body">
                <div className="p-5">
                  {plus} - {minus}
                </div>

                <button type="button" name="plus" className="btn btn-primary" onClick={this.handleCount}>
                  +1
                </button>
                <button type="button" name="minus" className="btn btn-primary" onClick={this.handleCount}>
                  -1
                </button>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={onClose}>
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
