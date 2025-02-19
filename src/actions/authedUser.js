import { hideLoading, showLoading } from "react-redux-loading";
export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const RESET_AUTHED_USER = "RESET_AUTHED_USER";

function setAuthedUser(authedUser) {
  return {
    type: SET_AUTHED_USER,
    authedUser,
  };
}
function resetAuthedUser() {
  return {
    type: RESET_AUTHED_USER,
    authedUser: {},
  };
}

export function handleAuthedUser(user) {
  return (dispatch) => {
    dispatch(showLoading());
    dispatch(setAuthedUser(user));
    dispatch(hideLoading());
  };
}
export function handleResetAuthedUser() {
  return (dispatch) => {
    dispatch(showLoading());
    dispatch(resetAuthedUser());
    dispatch(hideLoading());
  };
}
