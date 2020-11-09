import React from 'react';
import { connect } from 'react-redux';
import {
  fetchStatistic,
  getCurrentPhoto,
  modalOpen,
  removePhoto
} from '../../actions';

const Photo = ({
  photo,
  statisticSettings,
  onFetchStatistic,
  onRemovePhoto,
  onModalOpen,
  onCurrentPhoto,
}) => {
  const handleDelete = (id) => {
    onRemovePhoto(id)
  };

  const handleStatistic = (id) => {
    onFetchStatistic(id);
    onCurrentPhoto(photo);
    onModalOpen();
  }

  return (
    <div className="card photo-card">
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
        <button className="btn btn-danger ml-3" onClick={() => handleDelete(photo.id)}>
          <i className="far fa-trash-alt" />
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ statisticSettings }) => ({
  statisticSettings
});

const mapDispatchToProps = (dispatch) => ({
  onModalOpen: () => dispatch(modalOpen()),
  onRemovePhoto: (id) => dispatch(removePhoto(id)),
  onFetchStatistic: (id) => dispatch(fetchStatistic(id)),
  onCurrentPhoto: (result) => dispatch(getCurrentPhoto(result))
});

export default connect(mapStateToProps, mapDispatchToProps)(Photo);