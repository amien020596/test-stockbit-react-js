import * as actionType from '../Actions/MovieTypes';

const initialState = {
  data: [],
  search: '',
  dataSearch: [],
  detail: {}
}

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_MOVIES_DATA:
      return fetchDataMovies(state, action)
    case actionType.SEARCH_MOVIE:
      return searchDataMovie(state, action)
    case actionType.DETAIL_MOVIE:
      return detailMovie(state, action)
    case actionType.CLEAR_DATA_MOVIES:
      return clearDataMovies(state)
    default:
      return state;
  }
}
// merge array
const fetchDataMovies = (state, action) => {
  return {
    ...state,
    data: [...state.data, ...action.data]
  }
}
const clearDataMovies = (state) => {
  return {
    ...state,
    data: []
  }
}

const searchDataMovie = (state, action) => {
  const dataSearch = state.data.filter(function (movie) {
    return movie.Title.toLowerCase().includes(action.data.toLowerCase())
  })

  return {
    ...state,
    search: action.data,
    dataSearch
  }
}

const detailMovie = (state, action) => {
  return {
    ...state,
    detail: {
      ...action.data
    }
  }
}

export default Reducer;