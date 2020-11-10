import axios from 'axios';
import { ACCSESS_KEY } from '../access-key'

const http = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    'Authorization': `Client-ID ${ACCSESS_KEY}`
  },
});

export const getPhotos = () => (
  http.get(`/photos/`)
);

export const getPhotoStatistic = (photoId) => (
  http.get(`/photos/${photoId}/statistics`)
);
