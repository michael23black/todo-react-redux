import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import mainReducer from "./state/mainReducer";
import "./index.css";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

let store = createStore(mainReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
