import { createActionTypes } from '../../../state/utils';

const name = 'moviesList';

const types = createActionTypes(
  {
    async: ['FETCH_MOVIES', 'FETCH_COMMENTS'],
  },
  name,
);

const fetchMovies = () => ({
  type: types.FETCH_MOVIES,
});

const fetchMoviesStarted = () => ({
  type: types.FETCH_MOVIES_STARTED,
});

const fetchMoviesSuccess = ({ movies }) => ({
  type: types.FETCH_MOVIES_SUCCESS,
  payload: {
    movies,
  },
});

const actions = {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesStarted,
};

export default {
  types,
  actions,
  name,
};
