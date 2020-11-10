import React from 'react';

// import loadingSpiner from '../../assets/loading-indicator.gif';
import loadingSpiner from '../../assets/loading-indicator.gif';
import './LoadingIndicator.scss'

const LoadingIndicator = () => (
  <div className="d-inline-block load-indicator">
    <img className="load-img" src={loadingSpiner} />
    <div className="load-bg"></div>
  </div>
);

export default LoadingIndicator;