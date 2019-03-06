import {ADD_QUIZ_ANSWER, REMOVE_ALL_QUIZ} from './type';

export const addQuiz = quiz => (
    {
      type: ADD_QUIZ_ANSWER,
      payload: quiz,
    }
  );

export const removeAllQuiz = quiz => (
{
    type: REMOVE_ALL_QUIZ,
    payload: quiz,
}
);