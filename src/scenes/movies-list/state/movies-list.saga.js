import { take, call, put } from 'redux-saga/effects';
import action from './movies-list.actions';
import axios from 'axios';

const { types, actions } = action;

const MOVIES_URL = 'https://tender-mclean-00a2bd.netlify.com/mobile/movies.json';

function* saga() {
  while (true) {
    yield take(types.FETCH_MOVIES);
    yield put(actions.fetchMoviesStarted());
    const { data } = yield call(axios.get, MOVIES_URL);
    if (data) {
      yield put(actions.fetchMoviesSuccess({ movies: data }));
    }
  }
}

export default saga;
