export const addQuizAnswer = quiz => (
    {
      type: 'ADD_QUIZ_ANSWER',
      payload: quiz,
    }
  );

export const removeAllQuiz = quiz => (
{
    type: 'REMOVE_ALL_QUIZ',
    payload: quiz,
}
);