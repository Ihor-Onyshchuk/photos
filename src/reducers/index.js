import { combineReducers } from 'redux';

import { defaultSettings } from '../config';
import {
  FETCH_PHOTOS_REQUEST,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAILURE,
  FETCH_STATISTIC_REQUEST,
  FETCH_STATISTIC_SUCCESS,
  FETCH_STATISTIC_FAILURE,
  REMOVE_PHOTO,
  OPEN_MODAL,
  CLOSE_MODAL,
  GET_CURRENT_PHOTO,
} from '../actions';

const photos = (state = [], action) => {
  switch (action.type) {
    case FETCH_PHOTOS_SUCCESS:
      return action.result;
    case REMOVE_PHOTO:
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};

const statistic = (state = {}, action) => {
  switch (action.type) {
    case FETCH_STATISTIC_SUCCESS:
      return { ...state, ...action.result };
    default:
      return state;
  }
}

const photosSettings = (state = defaultSettings, action) => {
  switch (action.type) {
    case FETCH_PHOTOS_REQUEST:
      return { loading: true, error: false };
    case FETCH_PHOTOS_SUCCESS:
      return { loading: false, error: false };
    case FETCH_PHOTOS_FAILURE:
      return { loading: false, error: true }
    default:
      return state;
  }
};

const statisticSettings = (state = defaultSettings, action) => {
  switch (action.type) {
    case FETCH_STATISTIC_REQUEST:
      return { loading: true, error: false };
    case FETCH_STATISTIC_SUCCESS:
      return { loading: false, error: false };
    case FETCH_STATISTIC_FAILURE:
      return { loading: false, error: true }
    default:
      return state;
  }
};

const modal = (state = false, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return true;
    case CLOSE_MODAL:
      return false;
    default:
      return state;
  }
};

const currentPhoto = (state = {}, action) => {
  switch (action.type) {
    case GET_CURRENT_PHOTO:
      return action.result;
    default:
      return state;
  }
}

export default combineReducers({
  modal,
  photos,
  statistic,
  currentPhoto,
  photosSettings,
  statisticSettings,
});