import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import { withRouter } from "react-router-dom";

class CardCover extends Component {
  ToDetails = (e, id) => {
    e.preventDefault();
    this.props.history.push(`/question/${id}`);
  };

  ToResult = (e, id) => {
    e.preventDefault();
    this.props.history.push(`/question/${id}/result`);
  };
  render() {
    const { question, user, filter } = this.props;
    return (
      <div>
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
              {`... ${question.optionOne.text}...`}
            </Card.Body>

            {filter === "unanswered" ? (
              <button
                className="btn-info"
                onClick={(e) => this.ToDetails(e, question.id)}
              >
                View Poll
              </button>
            ) : (
              <button
                className="btn-info"
                onClick={(e) => this.ToResult(e, question.id)}
              >
                View Poll
              </button>
            )}
          </Card>
        </CardDeck>
      </div>
    );
  }
}

export default withRouter(CardCover);
