import {ADD_QUIZ_ANSWER, REMOVE_ALL_QUIZ, ADD_ANSWER, GET_RESULT} from './type';

export const addQuiz = quiz => (
    {
      type: ADD_QUIZ_ANSWER,
      payload: quiz,
    });

export const removeAllQuiz = () => (
{
    type: REMOVE_ALL_QUIZ,
    payload: null,
});

export const addAnswer = quiz => (
{
    type: ADD_ANSWER,
    payload: quiz,
});