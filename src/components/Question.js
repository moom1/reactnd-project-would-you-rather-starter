import React, { Component } from "react";
import { connect } from "react-redux";

import CardCover from "./CardCover";

class Question extends Component {
  render() {
    const { question, user } = this.props;
    return (
      <div>
        <div className="question-head">
          <h3>{user.name} asks: </h3>
        </div>

        {/* <Link to={`/question/${question.id}`} className="tweet"> */}
        <div className="tweet">
          <CardCover user={user} question={question} />
        </div>
        {/* </Link> */}
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }, { id }) {
  const question = questions[id];
  const user = users[question.author];
  return {
    authedUser,
    authorized: authedUser.id ? true : false,
    question,
    user,
  };
}

export default connect(mapStateToProps)(Question);
