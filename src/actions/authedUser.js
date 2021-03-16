import { hideLoading, showLoading } from "react-redux-loading";
export const SET_AUTHED_USER = "SET_AUTHED_USER";

function setAuthedUser(user) {
  return {
    type: SET_AUTHED_USER,
    user,
  };
}

export function handleAuthedUser(user) {
  return (dispatch) => {
    dispatch(showLoading());
    return setAuthedUser(user).then(() => {
      dispatch(hideLoading());
    });
  };
}
