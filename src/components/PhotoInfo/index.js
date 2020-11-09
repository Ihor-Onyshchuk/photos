import React from 'react';
import { connect } from 'react-redux';

const PhotoInfo = ({ statistic, currentPhoto }) => {
  return (
    <div className="card">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            className="card-img"
            src={currentPhoto?.urls?.thumb}
            alt={currentPhoto?.alt_description}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Author: {currentPhoto?.user?.name}</h5>
            {currentPhoto.description && (
              <p className="card-text">
                description: {currentPhoto.description}
              </p>)}
            <div className="card-text">
              <h6>Statistic:</h6>
              <div>downloads: {statistic[currentPhoto.id]?.downloads}</div>
              <div>likes: {statistic[currentPhoto.id]?.likes}</div>
              <div>views: {statistic[currentPhoto.id]?.views}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ statistic, currentPhoto }) => ({
  statistic,
  currentPhoto,
})

export default connect(mapStateToProps)(PhotoInfo);
