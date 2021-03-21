import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import { handleInitialData } from "../actions/shared";
import Login from "./Login";
import Home from "./Home";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Nav from "./Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import CardDetails from "./CardDetails";
import CardResult from "./CardResult";

// add loading to the api request thingie. pictures when they load it messes up the page

// make new question

// leaderboard

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const { loading, authorized } = this.props;
    return (
      <Router>
        <Fragment>
          <LoadingBar style={{ backgroundColor: "blue", height: "5px" }} />

          <div className="container">
            <Nav />

            {loading ? null : (
              <div>
                {authorized ? (
                  <Redirect to="/home" />
                ) : (
                  <Redirect to="/login" />
                )}

                <Route path="/login" exact component={Login} />
                <Route path="/home" exact component={Home} />
                <Route path="/question/:id" exact component={CardDetails} />
                <Route
                  path="/question/:id/result"
                  exact
                  component={CardResult}
                />

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
    authorized: authedUser.id ? true : false,
  };
}

export default connect(mapStateToProps)(App);
