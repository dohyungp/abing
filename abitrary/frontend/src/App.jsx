import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserListPage from "./pages/UserListPage";
import LoginPage from "./pages/LoginPage";
import ExperimentListPage from "./pages/ExperimentListPage";
import "./App.css";

const App = () => (
  <>
    <Route path="/" component={HomePage} exact={true} />
    <Route path="/users" component={UserListPage} exact={true} />
    <Route path="/experiments" component={ExperimentListPage} exact={true} />
    <Route path="/login" component={LoginPage} exact={true} />
  </>
);

export default App;
