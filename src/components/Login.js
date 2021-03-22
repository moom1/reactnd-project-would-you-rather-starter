import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { handleAuthedUser } from "../actions/authedUser";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
class Login extends Component {
  state = {
    user: null,
    toHome: false,
  };
  handleSelect = (e) => {
    const userID = e.target.value;
    const filteredUsers = this.props.usersInfo.filter(
      (user) => user.id === userID
    );
    const filteredUser = filteredUsers[0];

    this.setState({ user: filteredUser });
  };

  handleLogin = (e) => {
    e.preventDefault();
    const { user } = this.state;
    const { dispatch, history } = this.props;
    dispatch(handleAuthedUser(user));
    this.setState(() => ({
      toHome: true,
    }));

    let page = "/";
    if (this.props.location.state !== null) {
      if (
        this.props.location.state.redirect === "/home" ||
        this.props.location.state.redirect === "/leaderboard" ||
        this.props.location.state.redirect === "/add" ||
        this.props.location.state.redirect.startsWith("/question")
      ) {
        page = this.props.location.state.redirect;
      } else if (this.props.location.state.redirect === "/") {
        page = "/home";
      } else {
        page = "/";
      }
    } else {
      page = "/home";
    }

    return history.push(page);
  };
  render() {
    return (
      <Card className="center">
        <Card.Body>
          <Card.Header>Welcome To The Would You Rather App!</Card.Header>
          <Card.Title className="my-2">Please sign in to continue</Card.Title>
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

          <div>
            <span className="h2" style={{ color: "#724fbe" }}>
              {" "}
              SIGN IN
            </span>
          </div>

          <form className="d-block my-2" onSubmit={this.handleLogin}>
            <div>
              <select
                className=""
                value={this.state.value}
                onChange={this.handleSelect}
              >
                <option>User to sign with</option>
                {this.props.usersInfo.map((user) => {
                  return (
                    <option key={user.id} value={user.id}>
                      {user.name}
                    </option>
                  );
                })}
              </select>
            </div>

            <Button
              variant="primary"
              type="submit"
              disabled={this.state.user === null ? true : false}
            >
              Login
            </Button>
          </form>
        </Card.Body>
      </Card>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    usersInfo: Object.entries(users).map((user) => user[1]),
  };
}

export default withRouter(connect(mapStateToProps)(Login));
