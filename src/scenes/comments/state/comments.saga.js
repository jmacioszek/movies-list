import { take, call, put, fork, select, cancel, all } from 'redux-saga/effects';
import action from './comments.actions';
import commentsActions from '../../../state/comments.actions';
import network from '../../../network';

const { types, actions } = action;

function* fetchComments() {
  const {
    payload: { id },
  } = yield take(commentsActions.types.FETCH_COMMENTS);
  const data = yield call(network.fetchComments, id);
  if (data) {
    yield put(commentsActions.actions.fetchCommentsSuccess({ id, comments: data.val() }));
  }
}

function* addComment() {
  while (true) {
    const {
      payload: { id },
    } = yield take(types.ADD_COMMENT);
    const comments = yield select(state => state.comments.comments);
    yield call(network.updateComments, id, comments);
  }
}

function* saga() {
  while (true) {
    const tasks = yield all([fork(fetchComments), fork(addComment)]);
    yield take(types.COMMENTS_GO_BACK);
    yield cancel(...tasks);
  }
}

export default saga;
