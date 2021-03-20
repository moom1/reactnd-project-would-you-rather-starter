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
            {`... ${question.optionOne.text}...`}
          </Card.Body>

          <button
            className="btn-info"
            onClick={(e) => this.ToDetails(e, question.id)}
          >
            View Poll
          </button>
        </Card>
      </CardDeck>
    );
  }
}

export default withRouter(CardCover);
