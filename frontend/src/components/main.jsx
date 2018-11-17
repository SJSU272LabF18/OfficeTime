import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./home";
import NotFound from "./common/notFound";
import ProblemStatement1 from "./problemStatement1";
import ProblemStatement2 from "./problemStatement2";
import Login from "./login";

class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/problem1" exact component={ProblemStatement1} />
          <Route path="/problem2" exact component={ProblemStatement2} />
          <Route path="/login" exact component={Login} />
          <Route path="/not-found" exact component={NotFound} />
          <Route path="/" exact component={Home} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    );
  }
}

export default Main;
