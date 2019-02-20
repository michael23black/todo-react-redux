// Libraries
import React, { Component } from "react";
import styled from "styled-components";
// Containers
import DetField from "../../containers/DetField";
// Components
import RouteButtons from "../../containers/RouteContainer";

const Container = styled.div``;

class CalcPage extends Component {
  state = {};
  render() {
    return (
      <Container>
        <DetField />
        <RouteButtons route={"/det/result"} nextLabel={"3"} />
      </Container>
    );
  }
}

export default CalcPage;
