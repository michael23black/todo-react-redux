import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-grow: 1;
`;
const AddButton = styled.button`
  width: 40px;
  border: 5px solid #182f0f;
  border-radius: 0px 10px 10px 0px;
  background-color: #182f0f;
  font-size: 20px;
  color: #e7e7f3;
  outline: none;
`;
const Input = styled.input`
  flex-grow: 1;
  padding: 0px 5px;
  border: 5px solid #182f0f;
  border-right: none;
  border-radius: 10px 0px 0px 10px;
  background-color: #e7e7f3;
  font-size: 20px;
  color: #333333;
  outline: none;
`;

const AddInput = props => (
  <Container>
    <Input
      value={props.inputValue}
      onChange={props.onChange}
      placeholder="Добавьте задачу..."
    />
    <AddButton onClick={props.addEvent}>+</AddButton>
  </Container>
);

export default AddInput;
