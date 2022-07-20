import { Component } from 'react';

import PropTypes from 'prop-types';

export class Modal extends Component {
  static defaultProps = {
    onClose: PropTypes.func.isRequired,
  };

  state = {
    left: 0,
    right: 100,
  };

  handleCount = event => {
    const { name } = event.target;

    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  render() {
    const { onClose } = this.props;
    const { left, right } = this.state;

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
                <div className="py-3">
                  {left} - {right}
                </div>

                <button type="button" name="left" className="btn btn-primary" onClick={this.handleCount}>
                  left
                </button>
                <button type="button" name="right" className="btn btn-primary ml-2" onClick={this.handleCount}>
                  right
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
