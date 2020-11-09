import React from 'react';
import { connect } from 'react-redux';
import {
  fetchStatistic,
  getCurrentPhoto,
  openModal,
} from '../../actions';

const Photo = ({
  photo,
  statisticSettings,
  onFetchStatistic,
  onModalOpen,
  onCurrentPhoto,
  handleConfirmModal,
}) => {
  const { id, urls, alt_description } = photo;

  const handleStatistic = (id) => {
    onFetchStatistic(id);
    onCurrentPhoto(photo);
    onModalOpen();
  }

  return (
    <>
      <div className="card photo-card">
        <img
          className="card-img"
          src={urls.small}
          alt={alt_description}
        />
        <div className="card-buttons">
          <button
            className="btn btn-info"
            onClick={() => handleStatistic(id)}
            disabled={statisticSettings.loading}
          >
            <i className="far fa-window-restore" />
          </button>
          <button
            className="btn btn-danger ml-3"
            onClick={() => handleConfirmModal(id)}
          >
            <i className="far fa-trash-alt" />
          </button>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ statisticSettings }) => ({
  statisticSettings,
});

const mapDispatchToProps = (dispatch) => ({
  onModalOpen: () => dispatch(openModal()),
  onFetchStatistic: (id) => dispatch(fetchStatistic(id)),
  onCurrentPhoto: (result) => dispatch(getCurrentPhoto(result)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Photo);