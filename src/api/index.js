import axios from 'axios';
import { ACCSESS_KEY } from '../../access-key'

const http = axios.create({
  baseURL: 'https://api.unsplash.com'
});

export const getPhotos = () => (
  http.get(`/photos/?client_id=${ACCSESS_KEY}`)
)