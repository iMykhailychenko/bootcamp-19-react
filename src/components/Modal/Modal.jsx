import { Component } from 'react';

import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

export class Modal extends Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleCloseModal);
  }

  handleCloseModal = event => {
    console.log(event);
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { onClose, title, children } = this.props;

    // createPortal(<></>, document.body)

    return createPortal(
      <>
        <div className="modal-backdrop fade show" />

        <div className="modal fade show" style={{ display: 'block' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                {title && <h5 className="modal-title">{title}</h5>}

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
      </>,
      document.body,
    );
  }
}
