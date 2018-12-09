import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import AddInput from "../components/AddInput";
import ToDoItem from "../components/ToDoItem";

import { addTask, removeTask } from "./../state/actions";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  padding: 10px;
  background-color: #616244;
  border-radius: 10px;
`;

class ToDoPanel extends React.Component {
  state = {
    inputValue: ""
  };
  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };
  handleAdd = () => {
    if (this.state.inputValue !== "") {
      this.props.addEvent(this.state.inputValue);
      this.setState({
        inputValue: ""
      });
    }
  };
  render() {
    return (
      <Container>
        <AddInput
          inputValue={this.state.inputValue}
          onChange={this.handleChange}
          addEvent={this.handleAdd}
        />
        <TransitionGroup component={null}>
          {this.props.tasks.map((item, index) => (
            <CSSTransition classNames="todo-item" timeout={500} key={item.id}>
              <ToDoItem
                removeEvent={() => this.props.removeEvent(index)}
                itemValue={item.task}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.todoReducer.tasks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addEvent: task => dispatch(addTask(task)),
    removeEvent: index => dispatch(removeTask(index))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoPanel);
