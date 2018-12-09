import { combineReducers } from "redux";
import { ADD_TODO, REMOVE_TODO } from "../actions";

let id = 0;

let initialState = {
  tasks: [
    { id: id++, task: "Побрить кота" },
    { id: id++, task: "Откусить себе ногу" }
  ]
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        tasks: [...state.tasks, { id: id++, task: action.payload.task }]
      };
    case REMOVE_TODO:
      return {
        ...state,
        tasks: [
          ...state.tasks.splice(0, action.payload.index),
          ...state.tasks.splice(action.payload.index + 1)
        ]
      };
    default:
      return state;
  }
};

const mainReducer = combineReducers({
  todoReducer
});

export default mainReducer;
