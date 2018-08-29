import actions from './comments.actions';
import reducer from './comments.reducer';
import saga from './comments.saga';

export default {
  reducer,
  saga,
  ...actions,
};
