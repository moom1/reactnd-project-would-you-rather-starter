import { getInitialData } from "../utils/api";
import { addUserAnswer, receiveUsers } from "../actions/users";
import { receiveQuestions, increaseQuestionVote } from "../actions/questions";
import { hideLoading, showLoading } from "react-redux-loading";
import { _saveQuestionAnswer } from "../utils/_DATA";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());

    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(hideLoading());
    });
  };
}

export function handleVote(questionID, authedUserID, option) {
  return (dispatch) => {
    dispatch(showLoading());

    return _saveQuestionAnswer({
      authedUser: authedUserID,
      qid: questionID,
      answer: option,
    }).then(() => {
      dispatch(increaseQuestionVote(questionID, authedUserID, option));
      dispatch(addUserAnswer(questionID, authedUserID, option));
      dispatch(hideLoading());
    });
  };
}
