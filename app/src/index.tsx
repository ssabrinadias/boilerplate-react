import React from "react";
import App from "./_app";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/home/index";
const view = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  );
};

App(view);