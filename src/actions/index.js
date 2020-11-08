import { getPhotos } from "../api";

const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST
});

const fetchDataFailure = () => ({
  type: FETCH_DATA_FAILURE,
});

const fetchDataSuccess = (result) => ({
  type: FETCH_DATA_SUCCESS,
  result,
});

export const fetchData = () => (dispatch) => {
  dispatch(fetchDataRequest());
  getPhotos()
    .then((response) => {
      dispatch(fetchDataSuccess(response.data || []))
    })
    .catch(() => dispatch(fetchDataFailure()))
};