import React from "react";
import "./App.css";
import CounterContainer from "./containers/CounterContainer";
import LoginFormContainer from "./containers/LoginContainer";

const App = () => (
  <div className="App">
    <CounterContainer />
    <LoginFormContainer />
  </div>
);

export default App;
