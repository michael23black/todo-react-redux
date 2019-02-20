// Libraries
import React, { Component } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
// Components
import RouteButton from "../components/RouteButton";

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
`;

class RouteContainer extends Component {
  backRoute = () => {
    this.props.history.goBack();
  };
  nextRoute = () => {
    this.props.history.push(this.props.route);
  };
  render() {
    return (
      <Container>
        <RouteButton
          back
          withoutBack={this.props.withoutBack}
          route={this.backRoute}
          label={this.props.backLabel || "< BACK"}
        />
        <RouteButton
          route={this.nextRoute}
          label={this.props.nextLabel || "NEXT >"}
        />
      </Container>
    );
  }
}
export default withRouter(RouteContainer);
