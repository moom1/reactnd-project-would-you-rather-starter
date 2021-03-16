import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import { handleInitialData } from "../actions/shared";
import Login from "./Login";
// import NewTweet from "./NewTweet";
// import TweetPage from "./TweetPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
            <div>
              {/* <Route path="/login" exact component={Login} /> */}
              <Route path="/home" />
              <Route path="/new-Question" exact component={Login} />
              <Route path="/leaderBoard" />
            </div>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default connect()(App);
