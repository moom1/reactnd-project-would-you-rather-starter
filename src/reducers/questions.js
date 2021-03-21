import {
  RECEIVE_QUESTIONS,
  INCREASE_VOTE,
  ADD_QUESTION,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };

    case INCREASE_VOTE:
      if (action.option === "optionOne") {
        return {
          ...state,
          [action.questionID]: {
            ...state[action.questionID],
            optionOne: {
              ...state[action.questionID].optionOne,
              votes: [
                ...state[action.questionID].optionOne.votes,
                action.authedUserID,
              ],
            },
          },
        };
      } else {
        return {
          ...state,
          [action.questionID]: {
            ...state[action.questionID],
            optionTwo: {
              ...state[action.questionID].optionTwo,
              votes: [
                ...state[action.questionID].optionOne.votes,
                action.authedUserID,
              ],
            },
          },
        };
      }
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: {
          ...action.question,
        },
      };

    default:
      return state;
  }
}
