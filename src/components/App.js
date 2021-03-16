import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import { handleInitialData } from "../actions/shared";
import Login from "./Login";
import Home from "./Home";
// import NewTweet from "./NewTweet";
// import TweetPage from "./TweetPage";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Nav from "./Nav";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar style={{ backgroundColor: "blue", height: "5px" }} />

          <div className="container">
            <Nav />

            {this.props.authedUser ? <Redirect to="/login" /> : null}

            {this.props.loading ? null : (
              <div>
                <Route path="/login" exact component={Login} />
                <Route path="/home" exact component={Home} />
                <Route path="/new-Question" />
                <Route path="/leaderBoard" />
              </div>
            )}
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ users, questions, authedUser }) {
  return {
    loading: users === null || questions === null,
    authedUser,
  };
}

export default connect(mapStateToProps)(App);
