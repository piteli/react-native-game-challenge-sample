import { combineReducers } from 'redux';
import {ADD_QUIZ_ANSWER, REMOVE_ALL_QUIZ} from './type';

const INITIAL_STATE = {
  quizs : []
};

const quizReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_QUIZ_ANSWER:
      return {
        ...state,
        quizs: state.quizs.concat(action.payload)
      }
    case 'REMOVE_ALL_QUIZ':
      return {
        ...state,
        quizs: []
      }
    default:
      return state
  }
};

export default combineReducers({
  quizs : quizReducer,
});
