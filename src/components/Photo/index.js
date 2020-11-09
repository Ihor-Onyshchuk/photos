import React from 'react';
import { connect } from 'react-redux';
import {
  closeConfirmModal,
  fetchStatistic,
  getCurrentPhoto,
  openConfirmModal,
  openModal,
  removePhoto
} from '../../actions';
import ConfirmModal from '../ConfirmModal';

const Photo = ({
  photo,
  confirmModal,
  statisticSettings,
  onFetchStatistic,
  onRemovePhoto,
  onModalOpen,
  onCurrentPhoto,
  onConfirmModalOpen,
  onConfirmModalClose
}) => {
  const handleDelete = (id) => {
    onRemovePhoto(id);
    onConfirmModalClose();
  };

  const handleStatistic = (id) => {
    onFetchStatistic(id);
    onCurrentPhoto(photo);
    onModalOpen();
  }

  return (
    <>
      <div className="card photo-card borderless">
        <img
          className="card-img"
          src={photo.urls.small}
          alt={photo.alt_description}
        />
        <div className="card-buttons">
          <button
            className="btn btn-info"
            onClick={() => handleStatistic(photo.id)}
            disabled={statisticSettings.loading}
          >
            <i className="far fa-window-restore" />
          </button>
          <button
            className="btn btn-danger ml-3"
            onClick={() => onConfirmModalOpen()}
          >
            <i className="far fa-trash-alt" />
          </button>
        </div>
      </div>
      {confirmModal && (
        <ConfirmModal
          id={photo.id}
          onClose={onConfirmModalClose}
          onConfirm={handleDelete}
        />
      )}
    </>
  );
};

const mapStateToProps = ({ statisticSettings, confirmModal }) => ({
  statisticSettings,
  confirmModal
});

const mapDispatchToProps = (dispatch) => ({
  onModalOpen: () => dispatch(openModal()),
  onRemovePhoto: (id) => dispatch(removePhoto(id)),
  onFetchStatistic: (id) => dispatch(fetchStatistic(id)),
  onCurrentPhoto: (result) => dispatch(getCurrentPhoto(result)),
  onConfirmModalOpen: () => dispatch(openConfirmModal()),
  onConfirmModalClose: () => dispatch(closeConfirmModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Photo);