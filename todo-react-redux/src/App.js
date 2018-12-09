import React from "react";
import styled from "styled-components";
import ToDoPanel from "./containers/ToDoPanel";

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 50px;
`;

class App extends React.Component {
  render() {
    return (
      <Main>
        <ToDoPanel />
      </Main>
    );
  }
}

export default App;
