import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";
import { handleVote } from "../actions/shared";
import { withRouter, Redirect } from "react-router";
import { CardDeck } from "react-bootstrap";

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
    const { id, question, user, notAuthorized } = this.props;
    if (notAuthorized) {
      if (question) {
        return (
          <Redirect
            to={{ pathname: "/login", state: { redirect: `/`, error: "404" } }}
          />
        );
      } else {
        return (
          <Redirect
            to={{ pathname: "/login", state: { redirect: `/question/${id}` } }}
          />
        );
      }
    }

    if (!user.id) {
      return <Redirect to={{ pathname: "/" }} />;
    }

    return (
      <Card className="tweet">
        <div className="question-head">
          <h3>{user.name} asks: </h3>
        </div>

        <CardDeck>
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
        </CardDeck>
      </Card>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }, props) {
  const { id } = props.match.params;
  const question = questions[id];

  if (!question) {
    return {
      question,
      id,
      authedUser,
      notAuthorized: authedUser.id ? false : true,
      user: {},
    };
  }

  const user = users[question.author];

  return {
    question,
    user,
    id,
    authedUser,
    notAuthorized: authedUser.id ? false : true,
  };
}

export default withRouter(connect(mapStateToProps)(CardDetails));
