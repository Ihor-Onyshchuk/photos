import React from 'react';
import { connect } from 'react-redux';
import Photo from '../Photo';

const PhotoList = ({ photos }) => (
  <>
    {photos.map((photo) => (
      <Photo key={photo.id} photo={photo} />
    ))}
  </>
);

const mapStateToProps = ({ photos }) => ({
  photos
});

export default connect(mapStateToProps)(PhotoList);