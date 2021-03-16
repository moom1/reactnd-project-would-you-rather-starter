import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import { handleResetAuthedUser } from "../actions/authedUser";

class Nav extends Component {
  handleLogout = () => {
    console.log(this.props.authedUser);
    const { dispatch } = this.props;
    dispatch(handleResetAuthedUser());
  };

  render() {
    const { authorized } = this.props;
    return (
      <nav className="nav">
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
            <li>
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
