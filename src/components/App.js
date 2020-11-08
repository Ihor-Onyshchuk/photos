import React from 'react';
import { connect } from 'react-redux';
import { fetchPhotos, fetchStatistic } from '../actions';

const App = ({ photos, statistic, onFetchPhotos, onFetchStatistic, }) => {
  return (
    <div>
      <ul>
        {photos.map(({ id, user, description, alt_description, urls }) => (
          <li key={id}>
            <div>
              <img src={urls.thumb} alt={alt_description} />
              <div>author: {user.name}</div>
              <div>description: {description}</div>
              <button onClick={() => onFetchStatistic(id)}>View Statistics</button>
              <button>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={() => onFetchPhotos()}>get photos</button>
    </div>
  );
};

const mapStateToProps = ({ photos, statistic, photosSettings, statisticSettings }) => ({
  photos,
  statistic,
  photosSettings,
  statisticSettings
});

const mapDispatchToProps = (dispatch) => ({
  onFetchPhotos: () => dispatch(fetchPhotos()),
  onFetchStatistic: (id) => dispatch(fetchStatistic(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
