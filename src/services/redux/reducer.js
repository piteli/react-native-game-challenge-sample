import { combineReducers } from 'redux';

const INITIAL_STATE = {
  quizs : []
};

const quizReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_QUIZ_ANSWER':
        const { quizs } = state;
        quizs.concat(action.payload);
        const newState = { quizs };
        return newState;
    // case 'REMOVE_ALL_QUIZ':
    //     const { quizs } = state;
    //     quizs = [];
    //     const newState = { quizs };
    //     return newState;
    default:
      return state
  }
};

export default combineReducers({
  quizs : quizReducer,
});
