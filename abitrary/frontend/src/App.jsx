import React from "react";
import { Route } from "react-router-dom";
import UserListPage from "./pages/UserListPage";
import LoginPage from "./pages/LoginPage";
import "./App.css";

const App = () => (
  <>
    <Route path="/" component={UserListPage} exact={true} />
    <Route path="/login" component={LoginPage} exact={true} />
  </>
);

export default App;
