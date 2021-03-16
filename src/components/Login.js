import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class Login extends Component {
  render() {
    const { users } = this.props;

    return (
      <ul>
        {users
          ? users.map((user) => {
              return <li>{user.name}</li>;
            })
          : null}
      </ul>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default withRouter(connect(mapStateToProps)(Login));
