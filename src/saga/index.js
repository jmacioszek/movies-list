import { fork } from 'redux-saga/effects';
import moviesListState from '../scenes/movies-list/state';

const sagas = [moviesListState.saga];

export default function* saga() {
  yield sagas.map(fork);
}
