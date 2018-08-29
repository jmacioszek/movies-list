import { createActionTypes } from './utils';

const name = 'comments';

const types = createActionTypes(
  {
    async: ['FETCH_COMMENTS'],
  },
  name,
);

const fetchComments = ({ id }) => ({
  type: types.FETCH_COMMENTS,
  payload: {
    id,
  },
});

const fetchCommentsSuccess = ({ id, comments }) => ({
  type: types.FETCH_COMMENTS_SUCCESS,
  payload: {
    id,
    comments,
  },
});

const actions = {
  fetchComments,
  fetchCommentsSuccess,
  types,
};

export default { actions, types };
