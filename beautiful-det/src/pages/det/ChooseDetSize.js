// Libraries
import React, { Component } from "react";
import styled from "styled-components";
//Components
import RouteButtons from "../../containers/RouteContainer";

const Container = styled.div``;

class ChooseDetSize extends Component {
  state = {};
  render() {
    return (
      <Container>
        <RouteButtons route={"/det/calculation"} nextLabel={"2"} />
      </Container>
    );
  }
}

export default ChooseDetSize;
