import React from 'react';
import { connect } from 'react-redux';
import Alert from '../Alert';

const PhotoInfo = ({ statistic, currentPhoto, statisticSettings }) => {
  const { id, urls, alt_description, user, description } = currentPhoto;
  const { loading, error } = statisticSettings;
  const { downloads, likes, views } = statistic[id] ?? 0;

  const isStatistic = !loading && !error;

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
              {loading && <div>Loading...</div>}
              {error && <Alert type="danger" text="Something go wrong!" />}
              {isStatistic && (
                <>
                  <div>downloads: {downloads}</div>
                  <div>likes: {likes}</div>
                  <div>views: {views}</div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({
  statistic,
  currentPhoto,
  statisticSettings
}) => ({
  statistic,
  currentPhoto,
  statisticSettings,
})

export default connect(mapStateToProps)(PhotoInfo);
