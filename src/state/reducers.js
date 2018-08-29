import { combineReducers } from 'redux';
import moviesListState from '../scenes/movies-list/state';
import commentsState from '../scenes/comments/state';

export default combineReducers({
  [moviesListState.name]: moviesListState.reducer,
  [commentsState.name]: commentsState.reducer,
});
