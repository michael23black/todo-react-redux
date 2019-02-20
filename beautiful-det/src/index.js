// Libraries
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
// Application
import App from "./App";
// Utils
import * as serviceWorker from "./serviceWorker";
// CSS
import "normalize.css";

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    
    font-family: 'ZCOOL QingKe HuangYou', cursive;
    font-size: 28px;
  }
`;

ReactDOM.render(
  <BrowserRouter>
    <Fragment>
      <GlobalStyle />
      <App />
    </Fragment>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
