export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const INCREASE_VOTE = "INCREASE_VOTE";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function increaseQuestionVote(questionID, authedUserID, option) {
  return {
    type: INCREASE_VOTE,
    questionID,
    authedUserID,
    option,
  };
}
