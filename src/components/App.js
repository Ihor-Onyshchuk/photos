import React from 'react';
import { connect } from 'react-redux';

import Modal from './Modal/Modal';
import PhotoInfo from './PhotoInfo';
import PhotoList from './PhotoList';
import '../index.scss';
import {
  closeModal,
  fetchPhotos,
} from '../actions';

const App = (props) => {
  const {
    modal,
    statisticSettings,
    photosSettings,
    onFetchPhotos,
    onModalClose,
  } = props;

  return (
    <>
      <div className="container">
        {photosSettings.loading && <div>Loading...</div>}
        {photosSettings.error && <div>Something go wrong</div>}
        <div className="card-columns py-3">
          <PhotoList />
        </div>
        <button onClick={() => onFetchPhotos()}>
          get photos
        </button>
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
    </>
  );
};

const mapStateToProps = ({
  modal,
  photosSettings,
  statisticSettings
}) => ({
  modal,
  photosSettings,
  statisticSettings
});

const mapDispatchToProps = (dispatch) => ({
  onFetchPhotos: () => dispatch(fetchPhotos()),
  onModalClose: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
