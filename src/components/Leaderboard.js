import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { Redirect } from "react-router";

import { connect } from "react-redux";
import UserStats from "./UserStats";

class Leaderboard extends Component {
  render() {
    const { users, notAuthorized } = this.props;
    if (notAuthorized) {
      return <Redirect to="/login" />;
    }
    return (
      <Card className="tweet">
        <Card.Header className="center bg-info h3">LEADERBOARD</Card.Header>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <UserStats user={user} />
            </li>
          ))}
        </ul>
      </Card>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  let arrayUsers = Object.entries(users).map((user) => user[1]);
  arrayUsers = arrayUsers.sort((a, b) => {
    const aAnswers = Object.keys(a.answers).length;
    const bAnswers = Object.keys(b.answers).length;
    return b.questions.length + bAnswers - (a.questions.length + aAnswers);
  });

  return {
    users: arrayUsers,
    notAuthorized: authedUser.id ? false : true,
  };
}

export default connect(mapStateToProps)(Leaderboard);
