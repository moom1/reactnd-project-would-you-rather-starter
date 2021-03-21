import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import Question from "./Question";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

class Home extends Component {
  state = {
    questionsToShow: "unanswered",
  };

  handleQuestionsToShow = (e) => {
    this.setState({ questionsToShow: e.target.value });
  };
  render() {
    let questions = [];
    const { notAuthorized, answeredQuestions, unansweredQuestion } = this.props;
    if (notAuthorized) {
      return <Redirect to="/login" />;
    }

    if (this.state.questionsToShow === "unanswered") {
      questions = unansweredQuestion;
    } else if (this.state.questionsToShow === "answered") {
      questions = answeredQuestions;
    }

    return (
      <Card className="tweet">
        <ButtonGroup toggle>
          <ToggleButton
            key="unanswered"
            type="radio"
            variant={
              this.state.questionsToShow === "unanswered"
                ? "primary"
                : "secondary"
            }
            name="radio"
            value="unanswered"
            checked={this.state.questionsToShow === "unanswered" ? true : false}
            onChange={this.handleQuestionsToShow}
          >
            unanswered
          </ToggleButton>
          <ToggleButton
            key="answered"
            type="radio"
            variant={
              this.state.questionsToShow === "answered"
                ? "primary"
                : "secondary"
            }
            name="radio"
            value="answered"
            checked={this.state.questionsToShow === "answered" ? true : false}
            onChange={this.handleQuestionsToShow}
          >
            answered
          </ToggleButton>
        </ButtonGroup>

        <div>
          <ul>
            {questions.map((question) => (
              <li key={question.id}>
                <Question
                  id={question.id}
                  filter={this.state.questionsToShow}
                />
              </li>
            ))}
          </ul>
        </div>
      </Card>
    );
  }
}

function mapStateToProps({ authedUser, questions }) {
  let answeredQuestions = [];
  let unansweredQuestion = [];
  const arrayQuestions = Object.entries(questions).map(
    (question) => question[1]
  );

  arrayQuestions.forEach((q) => {
    if (
      q.optionOne.votes.includes(authedUser.id) ||
      q.optionTwo.votes.includes(authedUser.id)
    ) {
      answeredQuestions.push(q);
    } else {
      unansweredQuestion.push(q);
    }
  });

  return {
    notAuthorized: authedUser.id ? false : true,
    answeredQuestions,
    unansweredQuestion,
  };
}
export default connect(mapStateToProps)(Home);
