import actions from './movies-list.actions';
import reducer from './movies-list.reducer.js';
import saga from './movies-list.saga';

export default {
  reducer,
  saga,
  ...actions,
};
