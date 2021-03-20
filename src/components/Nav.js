import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { handleResetAuthedUser } from "../actions/authedUser";

class Nav extends Component {
  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(handleResetAuthedUser());
  };

  render() {
    const { authorized, authedUser } = this.props;
    return (
      <nav className="nav d-flex justify-content-around border-bottom border-primary mb-2">
        <ul>
          <li>
            <NavLink to="/home" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-question" activeClassName="active">
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to="/leaderboard" activeClassName="active">
              Leaderboard
            </NavLink>
          </li>

          {authorized ? (
            <li className="d-flex justify-content-end">
              <span>{authedUser.name}</span>
              <img
                src={authedUser.avatarURL}
                style={{
                  borderRadius: "50%",
                  width: "25px",
                  height: " 25px",
                  border: "1px solid black",
                  background: "black",
                }}
                alt={authedUser.name}
                className="mx-2"
              />
              <NavLink
                to="/login"
                onClick={this.handleLogout}
                activeClassName="active"
              >
                Logout
              </NavLink>
            </li>
          ) : null}
        </ul>
      </nav>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
    authorized: authedUser.id ? true : false,
  };
}

export default connect(mapStateToProps)(Nav);
