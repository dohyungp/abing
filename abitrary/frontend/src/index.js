import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import rootSaga from "./sagas";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import createSagaMiddleware from "redux-saga";
import axios from "axios";
import { loadState, saveState } from "./libs/localStorage";
import App from "./App";
import "./index.css";
import throttle from "lodash/throttle";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:8000" : "/";

const customHistory = createBrowserHistory();
const persistedStore = loadState();
const sagaMiddleware = createSagaMiddleware({
  context: {
    history: customHistory,
  },
});

const store = createStore(
  rootReducer,
  persistedStore,
  composeWithDevTools(applyMiddleware(sagaMiddleware, logger)),
);

store.subscribe(
  throttle(() => {
    // only save login state.
    let { auth } = store.getState();
    if (!(auth?.loading || auth?.error)) saveState({ auth });
  }, 1000),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Router history={customHistory}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root"),
);
