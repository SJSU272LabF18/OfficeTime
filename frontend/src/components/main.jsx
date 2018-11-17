import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./home";
import NotFound from "./common/notFound";
import ProblemStatement1 from "./problemStatement1";
import ProblemStatement2 from "./problemStatement2";
import Login from "./login";
import Solution from "./solution";
import CompanyForm from "./companyForm";
import store from "./common/store";
import { Provider } from "react-redux";
import Suggestions from "./suggestions";
import About from "./about";

class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/solution" exact component={Solution} />
            <Route path="/problem1" exact component={ProblemStatement1} />
            <Route path="/problem2" exact component={ProblemStatement2} />
            <Route path="/login" exact component={Login} />
            <Route path="/companyform" exact component={CompanyForm} />
            <Route path="/suggestions" exact component={Suggestions} />
            <Route path="/about" exact component={About} />
            <Route path="/not-found" exact component={NotFound} />
            <Route path="/" exact component={Home} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </Provider>
    );
  }
}

export default Main;
