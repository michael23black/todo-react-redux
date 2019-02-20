// Libraries
import React, { Component } from "react";
import styled from "styled-components";
// Components
import DetInput from "../components/DetInput";

const Container = styled.div``;

class DetField extends Component {
  state = {};
  render() {
    return (
      <Container>
        <DetInput />
      </Container>
    );
  }
}

export default DetField;
