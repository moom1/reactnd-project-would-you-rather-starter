import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import { handleInitialData } from "../actions/shared";
import Login from "./Login";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import CardDetails from "./CardDetails";
import CardResult from "./CardResult";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";
import logout from "./Logout";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const { loading } = this.props;

    return (
      <Router>
        <Fragment>
          <LoadingBar style={{ backgroundColor: "blue", height: "5px" }} />

          <div className="container">
            <Nav />

            {loading ? null : (
              <Switch>
                <Route path="/login" exact component={Login} />
                <Route path="/home" exact component={Home} />
                <Route path="/question/:id" exact component={CardDetails} />
                <Route
                  path="/question/:id/result"
                  exact
                  component={CardResult}
                />

                <Route path="/add" exact component={NewQuestion} />
                <Route path="/leaderboard" exact component={Leaderboard} />
                <Route path="/logout" exact component={logout} />
                <Route path="/" component={ErrorPage} />
              </Switch>
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
