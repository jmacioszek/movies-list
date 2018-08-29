import { createActionTypes } from '../../../state/utils';

const name = 'comments';

const types = createActionTypes(
  {
    async: ['ADD_COMMENT'],
    sync: ['COMMENTS_GO_BACK'],
  },
  name,
);

const addComment = ({ id, comment }) => ({
  type: types.ADD_COMMENT,
  payload: {
    id,
    comment,
  },
});

const goBack = () => ({
  type: types.COMMENTS_GO_BACK,
});

const actions = {
  addComment,
  goBack,
};

export default {
  types,
  actions,
  name,
};
