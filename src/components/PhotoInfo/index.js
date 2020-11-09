import React from 'react';
import { connect } from 'react-redux';

const PhotoInfo = ({ statistic, currentPhoto }) => {
  const { id, urls, alt_description, user, description } = currentPhoto;
  const { downloads, likes, views } = statistic[id] ?? 0;

  return (
    <div className="card">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            className="card-img"
            src={urls.thumb}
            alt={alt_description}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Author: {user.name}</h5>
            {description && (
              <p className="card-text">
                description: {description}
              </p>)}
            <div className="card-text">
              <h6>Statistic:</h6>
              <div>downloads: {downloads}</div>
              <div>likes: {likes}</div>
              <div>views: {views}</div>
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
