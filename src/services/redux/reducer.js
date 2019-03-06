import { combineReducers } from 'redux';
import {ADD_QUIZ_ANSWER, REMOVE_ALL_QUIZ, ADD_ANSWER} from './type';

const INITIAL_STATE = {
  quizs : [],
  correctAnswers : 0,
  questionsAndAnswers : []
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
        quizs : [],
        correctAnswers : 0,
        questionsAndAnswers : []
      }
    case ADD_ANSWER:
      return {
        ...state,
        correctAnswers: action.payload.correctAnswers,
        questionsAndAnswers: state.questionsAndAnswers.concat(
          {questionIndex : action.payload.questionIndex, answer : action.payload.answer,
          question : action.payload.question, correctQuestionAnswer : action.payload.correctQuestionAnswer}),
      }
    default:
      return state
  }
};

export default combineReducers({
  quizs : quizReducer,
});
