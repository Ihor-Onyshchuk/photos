import React from 'react';
import { createPortal } from 'react-dom';

import cx from 'classnames';

import './Modal.scss';

const Modal = ({ isOpen, onClose, loading, children, className }) => {
  const handleModalClose = () => loading ? null : onClose(false);
  return createPortal(
    <div className={cx('modal', { 'd-block': isOpen }, className)}>
      <div className="modal-backdrop" onClick={handleModalClose} />
      <div className="modal-content bg-light">
        <button
          type="button"
          className="close close-modal"
          onClick={handleModalClose}
        >
          <span>&times;</span>
        </button>
        <div className="container">
          <div className="row">
            <div className="col-12 layout-offset">{children}</div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;