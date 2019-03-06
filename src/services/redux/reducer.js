import { combineReducers } from 'redux';
import {ADD_QUIZ_ANSWER, REMOVE_ALL_QUIZ, ADD_ANSWER} from './type';

const INITIAL_STATE = {
  quizs : [],
  userAnswers : []
};

const quizReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_QUIZ_ANSWER:
      return {
        ...state,
        quizs: state.quizs.concat(action.payload)
      }
    case REMOVE_ALL_QUIZ:
      return {
        ...state,
        quizs: []
      }
    case ADD_ANSWER:
      return {
        ...state,
        userAnswers: state.userAnswers.concat(action.payload)
      }
    default:
      return state
  }
};

export default combineReducers({
  quizs : quizReducer,
});
