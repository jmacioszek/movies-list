import actions from './movies-list.actions';

const { types } = actions;

const INITIAL_STATE = {
  movies: [],
  isFetching: false,
};

const moviesListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload.movies,
        isFetching: false,
      };
    case types.FETCH_MOVIES_STARTED:
      return {
        ...state,
        isFetching: true,
      };
    default:
      return state;
  }
};

const handleFetchMovies = (state, action) => {
  const movies = action.payload.movies.reduce((prev, next) => {
    prev.push({
      [next.title]: next,
    });
    return prev;
  }, []);
  return {
    ...state,
    movies,
  };
};

export default moviesListReducer;
