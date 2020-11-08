import { getPhotos, getPhotoStatistic } from "../api";

export const FETCH_PHOTOS_REQUEST = 'FETCH_PHOTOS_REQUEST';
export const FETCH_PHOTOS_FAILURE = 'FETCH_PHOTOS_FAILURE';
export const FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS';

export const FETCH_STATISTIC_REQUEST = 'FETCH_STATISTIC_REQUEST';
export const FETCH_STATISTIC_SUCCESS = 'FETCH_STATISTIC_SUCCESS';
export const FETCH_STATISTIC_FAILURE = 'FETCH_STATISTIC_FAILURE';

const fetchPhotosRequest = () => ({
  type: FETCH_PHOTOS_REQUEST
});

const fetchPhotosFailure = () => ({
  type: FETCH_PHOTOS_FAILURE,
});

const fetchPhotosSuccess = (result) => ({
  type: FETCH_PHOTOS_SUCCESS,
  result,
});

export const fetchPhotos = () => (dispatch) => {
  dispatch(fetchPhotosRequest());
  getPhotos()
    .then((response) => {
      dispatch(fetchPhotosSuccess(response.data || []))
    })
    .catch(() => dispatch(fetchPhotosFailure()))
};

const fetchStatisticRequest = () => ({
  type: FETCH_STATISTIC_REQUEST
});

const fetchStatisticSuccess = (result) => ({
  type: FETCH_STATISTIC_SUCCESS,
  result
});

const fetchStatisticFailure = () => ({
  type: FETCH_STATISTIC_FAILURE
});

export const fetchStatistic = (id) => (dispatch, getState) => {
  const { statistic } = getState();

  if (statistic[id]) {
    return statistic[id];
  }

  dispatch(fetchStatisticRequest());
  getPhotoStatistic(id)
    .then(({ data }) => {
      const mappedResponse = {
        [id]: {
          downloads: data?.downloads?.total,
          likes: data?.likes?.total,
          views: data?.views?.total,
        }
      };
      dispatch(fetchStatisticSuccess(mappedResponse))
    })
    .catch(() => dispatch(fetchStatisticFailure()))
};