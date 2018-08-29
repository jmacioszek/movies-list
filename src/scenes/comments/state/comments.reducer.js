import actions from './comments.actions';
import commentsActions from '../../../state/comments.actions';

const { types } = actions;

const INITIAL_STATE = {
  comments: [],
  isFetching: false,
};

const commentsListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case commentsActions.types.FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload.comments || [],
        isFetching: false,
      };
    case commentsActions.types.FETCH_COMMENTS:
      return {
        ...state,
        isFetching: true,
      };
    case types.ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload.comment],
      };
    default:
      return state;
  }
};

export default commentsListReducer;
