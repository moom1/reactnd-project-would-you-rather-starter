import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { Redirect, withRouter } from "react-router";

import { connect } from "react-redux";

class ErrorPage extends Component {
  render() {
    const { notAuthorized } = this.props;
    if (notAuthorized) {
      return <Redirect to={{ pathname: "/login", state: { redirect: "/" } }} />;
    }
    return (
      <Card className="tweet">
        <div className="h1 center">Error 404</div>
      </Card>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    notAuthorized: authedUser.id ? false : true,
  };
}

export default withRouter(connect(mapStateToProps)(ErrorPage));
