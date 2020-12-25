import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import "./App.css";

const App = () => (
  <>
    <Route path="/" component={HomePage} exact={true} />
    <Route path="/login" component={LoginPage} exact={true} />
  </>
);

export default App;
