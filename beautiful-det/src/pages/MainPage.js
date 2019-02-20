// Libraries
import React, { Component } from "react";
import styled from "styled-components";
//Components
import RouteButtons from "../containers/RouteContainer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

class MainPage extends Component {
  state = {};
  render() {
    return (
      <Container>
        <RouteButtons withoutBack route={"/det/size"} nextLabel={"1"} />
      </Container>
    );
  }
}

export default MainPage;
