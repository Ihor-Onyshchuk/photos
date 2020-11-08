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

export default combineReducers({
  photos,
  statistic,
  photosSettings,
  statisticSettings,
});