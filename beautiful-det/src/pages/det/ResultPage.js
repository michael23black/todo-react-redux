// Libraries
import React, { Component } from "react";
import styled from "styled-components";
//Components
import RouteButtons from "../../containers/RouteContainer";

const Container = styled.div``;

class ResultPage extends Component {
  state = {};
  render() {
    return (
      <Container>
        <RouteButtons route={"/"} nextLabel={"4"} />
      </Container>
    );
  }
}

export default ResultPage;
