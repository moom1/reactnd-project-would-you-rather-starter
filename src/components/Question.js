import React, { Component } from "react";
import { connect } from "react-redux";

import CardCover from "./CardCover";

class Question extends Component {
  render() {
    const { question, user, filter } = this.props;
    return (
      <div>
        <div className="tweet">
          <CardCover user={user} question={question} filter={filter} />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }, { id, filter }) {
  const question = questions[id];
  const user = users[question.author];
  return {
    authedUser,
    authorized: authedUser.id ? true : false,
    question,
    user,
    filter,
  };
}

export default connect(mapStateToProps)(Question);
