import React, { Component } from "react";
import { Redirect, withRouter } from "react-router";

import { connect } from "react-redux";

class Logout extends Component {
  render() {
    return (
      <Redirect to={{ pathname: "/login", state: { redirect: "/home" } }} />
    );
  }
}

export default withRouter(connect()(Logout));
