import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router";
import { handleAuthedUser } from "../actions/authedUser";

class Login extends Component {
  state = {
    user: null,
    toHome: false,
  };
  handleSelect = (e) => {
    const userID = e.target.value;
    const filteredUsers = this.props.usersInfo.filter(
      (user) => user.id === userID
    );
    const filteredUser = filteredUsers[0];

    this.setState({ user: filteredUser });
  };

  handleLogin = (e) => {
    e.preventDefault();
    const { user } = this.state;
    console.log(user);

    const { dispatch } = this.props;
    dispatch(handleAuthedUser(user));
    this.setState(() => ({
      toHome: true,
    }));
  };
  render() {
    const toHome = this.state.toHome;
    if (toHome === true) {
      return <Redirect to="/home" />;
    }
    return (
      <form className="new-tweet" onSubmit={this.handleLogin}>
        <select value={this.state.value} onChange={this.handleSelect}>
          <option>User to sign with</option>
          {this.props.usersInfo.map((user) => {
            return (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            );
          })}
        </select>

        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    usersInfo: Object.entries(users).map((user) => user[1]),
  };
}

export default withRouter(connect(mapStateToProps)(Login));
