import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";
import { handleVote } from "../actions/shared";
import { withRouter } from "react-router";

class CardDetails extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { id, authedUser, dispatch } = this.props;

    if (e.target.answer[0].checked) {
      dispatch(handleVote(id, authedUser.id, "optionOne"));
    } else {
      dispatch(handleVote(id, authedUser.id, "optionTwo"));
    }

    this.props.history.push(`/question/${id}/result`);
  };
  render() {
    const { question, user } = this.props;
    return (
      <div>
        <div className="question-head">
          <h3>{user.name} asks: </h3>
        </div>

        <div className="tweet ">
          <Card>
            <Card.Img
              variant="top"
              src={user.avatarURL}
              style={{
                borderEndStartRadius: "50%",
                borderStartEndRadius: "50%",
                background: "black",
              }}
            />
          </Card>
          <Card>
            <Card.Header>Would You Rather...</Card.Header>

            <Card.Body className="center">
              <Form onSubmit={this.handleSubmit}>
                <Card key={`default-radio`} className="mb-3">
                  <Card.Header className="mb-4">
                    <Form.Check
                      name="answer"
                      type="radio"
                      label={question.optionOne.text}
                      value={question.optionOne.text}
                    />
                  </Card.Header>

                  <Card.Header>
                    <Form.Check
                      name="answer"
                      type="radio"
                      value={question.optionTwo.text}
                      label={question.optionTwo.text}
                    />
                  </Card.Header>
                </Card>

                <button className="btn-success btn-lg" type="submit">
                  Submit
                </button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }, props) {
  const { id } = props.match.params;
  const question = questions[id];

  const user = users[question.author];

  return {
    question,
    user,
    id,
    authedUser,
  };
}

export default withRouter(connect(mapStateToProps)(CardDetails));
