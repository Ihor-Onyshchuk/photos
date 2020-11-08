import { combineReducers } from 'redux';

import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from '../actions';
import { dataSettings as defaultDataSettings } from '../config';

const data = (state = [], action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return action.result;
    default:
      return state;
  }
}

const dataSettings = (state = defaultDataSettings, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { loading: true, error: false };
    case FETCH_DATA_SUCCESS:
      return { loading: false, error: false };
    case FETCH_DATA_FAILURE:
      return { loading: false, error: true }
    default:
      return state;
  }
}

export default combineReducers({
  data,
  dataSettings
})