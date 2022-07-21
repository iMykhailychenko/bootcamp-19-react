import { Component } from 'react';

import PropTypes from 'prop-types';

export class Modal extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { onClose, children } = this.props;

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

              <div className="modal-body">{children}</div>

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
