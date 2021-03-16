import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    return <div>sss</div>;
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}
export default connect(mapStateToProps)(Home);
