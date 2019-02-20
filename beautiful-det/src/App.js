// Libraries
import React, { Component } from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
// Pages
import MainPage from "./pages/MainPage";
import ChooseDetSize from "./pages/det/ChooseDetSize";
import CalcPage from "./pages/det/CalcPage";
import ResultPage from "./pages/det/ResultPage";

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1000px;
`;

class Det extends Component {
  render() {
    return (
      <Switch>
        <Route path="/det/size" component={ChooseDetSize} />
        <Route path="/det/calculation" component={CalcPage} />
        <Route path="/det/result" component={ResultPage} />
      </Switch>
    );
  }
}

class App extends Component {
  state = {};
  render() {
    return (
      <MainContainer>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/det" component={Det} />
        </Switch>
      </MainContainer>
    );
  }
}

export default App;
