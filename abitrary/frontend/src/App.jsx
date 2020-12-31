import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserListPage from "./pages/UserListPage";
import LoginPage from "./pages/LoginPage";
import ExperimentListPage from "./pages/ExperimentListPage";
import ExperimentCreationPage from "./pages/ExperimentCreationPage";
import ExperimentDetailPage from "./pages/ExperimentDetailPage";
import PrivateRoute from "./containers/global/PrivateRoute";
import PublicRoute from "./containers/global/PublicRoute";
import Page404 from "./pages/404Page";
import "./App.css";

const App = () => (
  <Switch>
    <PrivateRoute path="/" comp={HomePage} exact={true} />
    <PrivateRoute path="/users" comp={UserListPage} exact={true} />
    <PrivateRoute path="/experiments" comp={ExperimentListPage} exact={true} />
    <PrivateRoute
      path="/experiments/create"
      comp={ExperimentCreationPage}
      exact={true}
    />
    <PrivateRoute path="/experiments/:expId" comp={ExperimentDetailPage} />
    <PublicRoute path="/login" comp={LoginPage} exact={true} />
    <Route path="*" component={Page404} />
  </Switch>
);

export default App;
