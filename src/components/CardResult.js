import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import OptionResult from "./OptionResult";
import { connect } from "react-redux";
import { CardDeck } from "react-bootstrap";

class CardResult extends Component {
  render() {
    const { question, user, authedUser } = this.props;
    return (
      <Card className="tweet">
        <div className="question-head">
          <h3>Asked by {user.name}</h3>
        </div>

        <CardDeck>
          <Card>
            <Card.Img
              className="mx-auto mt-5 text-center"
              src={user.avatarURL}
              style={{
                borderEndStartRadius: "50%",
                borderStartEndRadius: "50%",
                background: "black",
              }}
            />
          </Card>

          <Card>
            <Card.Header>Results:</Card.Header>

            <Card.Body className="center">
              <OptionResult
                text={question.optionOne.text}
                votes={question.optionOne.votes}
                total={
                  question.optionOne.votes.length +
                  question.optionTwo.votes.length
                }
                authedUserVoted={
                  question.optionOne.votes.includes(authedUser.id)
                    ? true
                    : false
                }
              />
            </Card.Body>
            <Card.Body className="center">
              <OptionResult
                text={question.optionTwo.text}
                votes={question.optionTwo.votes}
                total={
                  question.optionOne.votes.length +
                  question.optionTwo.votes.length
                }
                authedUserVoted={
                  question.optionTwo.votes.includes(authedUser.id)
                    ? true
                    : false
                }
              />
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

  const user = users[question.author];

  return {
    question,
    user,
    id,
    authedUser,
  };
}

export default connect(mapStateToProps)(CardResult);
