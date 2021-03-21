export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_ANSWER = "ADD_ANSWER";
export const ADD_USER_QUESTION = "ADD_USER_QUESTION";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function addUserAnswer(questionID, authedUserID, option) {
  return {
    type: ADD_ANSWER,
    questionID,
    authedUserID,
    option,
  };
}
export function addUserQuestion(questionID, authedUserID) {
  return {
    type: ADD_USER_QUESTION,
    questionID,
    authedUserID,
  };
}
