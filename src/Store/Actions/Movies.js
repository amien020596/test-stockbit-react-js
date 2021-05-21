import * as actionType from './MovieTypes';

export const fetchDataMovies = data => {
  return {
    type: actionType.FETCH_MOVIES_DATA,
    data
  }
}

export const searchMovies = word => {
  return {
    type: actionType.SEARCH_MOVIE,
    data: word
  }
}

export const detailMovie = data => {
  return {
    type: actionType.DETAIL_MOVIE,
    data
  }
}
export const clearDataMovies = () => {
  return {
    type: actionType.CLEAR_DATA_MOVIES
  }
}