import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions';

const App = ({ data, onFetchData }) => {
  return (
    <div>
      <ul>
        {data.map(({ id, user, description, alt_description, urls }) => (
          <li key={id}>
            <div>
              <img src={urls.thumb} alt={alt_description} />
              <div>author: {user.name}</div>
              <div>description: {description}</div>
              <button>View Statistic</button>
              <button>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={() => onFetchData()}>get photos</button>
    </div>
  );
};

const mapStateToProps = ({ data }) => ({
  data
});

const mapDispatchToProps = (dispatch) => ({
  onFetchData: () => dispatch(fetchData()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
