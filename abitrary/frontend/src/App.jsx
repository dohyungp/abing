import React from "react";
import { Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import "./App.css";

const App = () => (
  <>
    <Route path="/login" component={LoginPage} exact={true} />
  </>
);

export default App;
