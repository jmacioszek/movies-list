import { combineReducers } from 'redux';
import moviesListState from '../scenes/movies-list/state';

export default combineReducers({
  [moviesListState.name]: moviesListState.reducer,
});
