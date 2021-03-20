import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";
import { increaseVote } from "../actions/questions";

class CardDetails extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { id, authedUser, dispatch } = this.props;

    if (e.target.answer[0].checked) {
      dispatch(increaseVote(id, authedUser.id, "optionOne"));
    } else {
      dispatch(increaseVote(id, authedUser.id, "optionTwo"));
    }
  };
  render() {
    const { question, user } = this.props;
    return (
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

export default connect(mapStateToProps)(CardDetails);
