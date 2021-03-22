import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { handleAddQuestion } from "../actions/shared";
class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
    toHome: false,
  };

  handleOptionOne = (e) => {
    this.setState(() => ({
      optionOne: e.target.value,
    }));
  };

  handleOptionTwo = (e) => {
    this.setState(() => ({
      optionTwo: e.target.value,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { optionOne, optionTwo } = this.state;
    const { dispatch, authedUser } = this.props;

    dispatch(handleAddQuestion(optionOne, optionTwo, authedUser.id));
    this.setState(() => ({
      toHome: true,
    }));
  };

  render() {
    const { notAuthorized } = this.props;
    if (notAuthorized) {
      return (
        <Redirect to={{ pathname: "/login", state: { redirect: "/add" } }} />
      );
    }
    const toHome = this.state.toHome;
    if (toHome === true) {
      return <Redirect to="/home" />;
    }
    return (
      <Card className="center">
        <Card.Body>
          <Card.Header>Create new question</Card.Header>
          <Card.Title className="my-2">Complete the question</Card.Title>
          <Card.Img
            variant="top"
            src="https://miro.medium.com/max/1200/1*i1yreXvK0kGrS9_uy5qKHQ.jpeg"
            alt="react redux logo"
            style={{
              width: "100px",
              height: "100px",
            }}
            className="center"
          />

          <Card.Title className="my-2">Would You Rather...</Card.Title>

          <form className="d-block my-2" onSubmit={this.handleSubmit}>
            <Card className="tweet">
              <input
                type="text"
                placeholder="Enter Option One"
                value={this.state.optionOne}
                onChange={this.handleOptionOne}
              />
              <Card.Title className="my-2">OR</Card.Title>
              <input
                type="text"
                placeholder="Enter Option Tow"
                value={this.state.optionTwo}
                onChange={this.handleOptionTwo}
              />
            </Card>

            <Button
              variant="primary"
              type="submit"
              disabled={this.state.user === null ? true : false}
            >
              Submit
            </Button>
          </form>
        </Card.Body>
      </Card>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
    notAuthorized: authedUser.id ? false : true,
  };
}

export default withRouter(connect(mapStateToProps)(NewQuestion));
