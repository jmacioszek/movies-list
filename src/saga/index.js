import { fork } from 'redux-saga/effects';
import moviesListState from '../scenes/movies-list/state';
import commentsState from '../scenes/comments/state';

const sagas = [moviesListState.saga, commentsState.saga];

export default function* saga() {
  yield sagas.map(fork);
}
