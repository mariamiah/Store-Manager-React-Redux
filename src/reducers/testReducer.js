import * as actions from '../actions/ActionTypes';

const initialState = {
  test: 'test',
};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.TEST_ACTION:
      return {
        ...state,
        test: action.payload,
      };

    default:
      return state;
  }
};
export default testReducer;
