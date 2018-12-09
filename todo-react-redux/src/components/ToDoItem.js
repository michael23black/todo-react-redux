import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3px;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  padding: 0px 5px;
  font-size: 20px;
  background-color: #e7e7f3;
  border: 5px solid #aa0000;
  border-right: none;
  border-radius: 10px 0px 0px 10px;
  color: #333333;
`;
const RemoveButton = styled.button`
  width: 40px;
  border: 5px solid #aa0000;
  border-radius: 0px 10px 10px 0px;
  background-color: #aa0000;
  font-size: 20px;
  color: #e7e7f3;
  outline: none;
`;

const ToDoItem = props => (
  <Container>
    <Title>{props.itemValue}</Title>
    <RemoveButton onClick={props.removeEvent}>-</RemoveButton>
  </Container>
);

export default ToDoItem;
