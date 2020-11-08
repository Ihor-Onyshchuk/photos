import axios from 'axios';

const http = axios.create({
  baseURL: 'https://api.unsplash.com'
});

export const getPhotos = () => (
  http.get(`/photos/?client_id=${ACCSESS_KEY}`)
)