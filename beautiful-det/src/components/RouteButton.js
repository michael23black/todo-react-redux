// Libraries
import React, { Component } from "react";
import styled from "styled-components";
import anime from "animejs";
import Anime from "react-anime";

const Container = styled.button`
  display: ${props => (props.withoutBack ? "none" : "flex")};
  position: relative;
  justify-content: center;
  width: 200px;
  height: 50px;
  border: 5px solid black;
  border-radius: 20px;
  background-color: white;
  color: black;
  outline: none;
  &:hover {
    color: white;
  }
  &::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    ${props => (props.back ? "left: 0%" : "right: 0%")};
    width: 0px;
    height: 0px;
    border: 0px solid white;
    border-bottom: none;
    border-left: none;
    border-radius: 3px 8px 3px 0px;
    background-color: red;
    transform: translate(${props => (props.back ? "-42%, -50%" : "42%, -50%")})
      rotateZ(${props => (props.back ? "-135deg" : "45deg")});
    transform-origin: center;
    transition: width 0.01s linear, height 0.01s linear,
      background-color 0s linear 0.01s, border 0s linear 0.01s;
  }
  &:hover::after {
    width: 30px;
    height: 30px;
    border: 5px solid black;
    background-color: black;
    transition: width 0.01s linear 0.2s, height 0.01s linear 0.2s,
      background-color 0s linear 0.2s, border 0s linear 0.2s;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0px;
    ${props => (props.back ? "right: 0px" : "left: 0px")};
    height: 100%;
    width: 0;
    border-radius: 10px;
    background-color: black;
    transition: width 0.2s linear;
    z-index: -2;
  }
  &:hover::before {
    width: 100%;
  }
`;

class RouteButton extends Component {
  render() {
    return (
      <Anime easing="easeInOutCirc" scale={[0, 1]} duration={500}>
        <Container
          back={this.props.back}
          direction={this.props.tho}
          withoutBack={this.props.withoutBack}
          onClick={this.props.route}
        >
          {this.props.label}
        </Container>
      </Anime>
    );
  }
}

export default RouteButton;
