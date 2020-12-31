import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserListPage from "./pages/UserListPage";
import LoginPage from "./pages/LoginPage";
import ExperimentListPage from "./pages/ExperimentListPage";
import ExperimentCreationPage from "./pages/ExperimentCreationPage";
import ExperimentDetailPage from "./pages/ExperimentDetailPage";
import Page404 from "./pages/404Page";
import "./App.css";

const App = () => (
  <Switch>
    <Route path="/" component={HomePage} exact={true} />
    <Route path="/users" component={UserListPage} exact={true} />
    <Route path="/experiments" component={ExperimentListPage} exact={true} />
    <Route
      path="/experiments/create"
      component={ExperimentCreationPage}
      exact={true}
    />
    <Route path="/experiments/:expId" component={ExperimentDetailPage} />
    <Route path="/login" component={LoginPage} exact={true} />
    <Route path="*" component={Page404} />
  </Switch>
);

export default App;
