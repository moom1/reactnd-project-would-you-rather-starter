import { RECEIVE_USERS, ADD_ANSWER, ADD_USER_QUESTION } from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };

    case ADD_ANSWER:
      return {
        ...state,
        [action.authedUserID]: {
          ...state[action.authedUserID],
          answers: {
            ...state[action.authedUserID].answers,
            [action.questionID]: action.option,
          },
        },
      };

    case ADD_USER_QUESTION:
      return {
        ...state,
        [action.authedUserID]: {
          ...state[action.authedUserID],
          questions: [
            ...state[action.authedUserID].questions,
            action.questionID,
          ],
        },
      };
    default:
      return state;
  }
}
