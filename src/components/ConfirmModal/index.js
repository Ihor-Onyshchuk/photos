import React from 'react';

import './ConfirmModal.scss';

const ConfirmModal = ({
  photo,
  onClose,
  onConfirm,
}) => {
  console.log('photo in modal', photo)
  return (
    <div className="confirm-modal">
      <div onClick={onClose} className="confirm-modal-backdrop" />
      <div className="confirm-modal-content">
        <h3 className="confirm-modal-title">
          Are you sure to want delete this photo?
        </h3>
        <div className="confirm-modal-footer">
          <button className="btn btn-danger" onClick={() => onConfirm(photo.id)}>Ok</button>
          <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;