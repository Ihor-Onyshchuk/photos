import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Modal from '../Modal/Modal';
import PhotoInfo from '../PhotoInfo';
import PhotoList from '../PhotoList';
import {
  closeConfirmModal,
  closeModal,
  fetchPhotos,
  getCurrentPhoto,
  openConfirmModal,
  removePhoto,
} from '../../actions';
import ConfirmModal from '../ConfirmModal';
import Alert from '../Alert';
import { preventBodyScroll } from '../../utils';
import '../../assets/scss/main.scss';

const App = (props) => {
  const {
    photos,
    modal,
    confirmModal,
    statisticSettings,
    photosSettings,
    onFetchPhotos,
    onModalClose,
    currentPhoto,
    onCurrentPhoto,
    onConfirmModalOpen,
    onConfirmModalClose,
    onRemovePhoto,
  } = props;
  const isModal = modal || confirmModal;

  preventBodyScroll(isModal);

  useEffect(() => {
    onFetchPhotos()
  }, []);

  const handleConfirmModal = (id) => {
    const currentPhoto = photos.find(photo => id === photo.id);

    onConfirmModalOpen();
    onCurrentPhoto(currentPhoto);
  }

  const handlePhotoDelete = () => {
    // Also, you can remove a photo from your collection by REST, using user auth
    onRemovePhoto(currentPhoto.id);
    onConfirmModalClose();
  }

  return (
    <>
      <div className="container">
        {photosSettings.loading && <div>Loading...</div>}
        {photosSettings.error && <Alert type="danger" text="Something go wrong!" />}
        <div className="card-columns py-3">
          <PhotoList handleConfirmModal={handleConfirmModal} />
        </div>
      </div>
      {modal && (
        <Modal
          isOpen={modal}
          onClose={onModalClose}
          loading={statisticSettings.loading}
        >
          <PhotoInfo />
        </Modal>
      )}
      {confirmModal && (
        <ConfirmModal
          photo={currentPhoto}
          onClose={onConfirmModalClose}
          onConfirm={handlePhotoDelete}
        />
      )}
    </>
  );
};

const mapStateToProps = ({
  modal,
  photosSettings,
  statisticSettings,
  currentPhoto,
  photos,
  confirmModal,
}) => ({
  modal,
  photos,
  photosSettings,
  statisticSettings,
  currentPhoto,
  confirmModal,
});

const mapDispatchToProps = (dispatch) => ({
  onFetchPhotos: () => dispatch(fetchPhotos()),
  onModalClose: () => dispatch(closeModal()),
  onCurrentPhoto: (result) => dispatch(getCurrentPhoto(result)),
  onConfirmModalOpen: () => dispatch(openConfirmModal()),
  onConfirmModalClose: () => dispatch(closeConfirmModal()),
  onRemovePhoto: (id) => dispatch(removePhoto(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
