import React from 'react';

const Alert = ({ type = 'info', text }) => (
  <div className={`text-center alert alert-${type} my-3`} role="alert">
    {text}
  </div>
);

export default Alert;
