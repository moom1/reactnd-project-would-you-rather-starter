import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import Question from "./Question";

class Home extends Component {
  render() {
    const { notAuthorized, questions } = this.props;
    if (notAuthorized) {
      return <Redirect to="/login" />;
    }

    return (
      <div>
        {/* <h3 className="center">TIMELINE</h3> */}
        <ul className="dashboard-list"></ul>
        {questions.map((question) => (
          <li key={question.id}>
            <Question id={question.id} />
          </li>
        ))}
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions }) {
  return {
    authedUser,
    notAuthorized: authedUser.id ? false : true,
    questions: Object.entries(questions).map((question) => question[1]),
  };
}
export default connect(mapStateToProps)(Home);
