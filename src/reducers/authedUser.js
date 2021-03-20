import { RESET_AUTHED_USER, SET_AUTHED_USER } from "../actions/authedUser";

export default function authedUser(state = {}, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return {
        //NOTE TO SELF when we say ...state we mean the old values of whatever was inside authedUser NOT keeping the entire old state as I thought from the course
        ...action.authedUser,
      };

    case RESET_AUTHED_USER:
      return {
        ...action.authedUser,
      };
    default:
      return state;
  }
}
