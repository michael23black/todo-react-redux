import { combineReducers } from "redux";
import { ADD_TODO, REMOVE_TODO } from "../actions";

let initialState = {
  tasks: ["Побрить кота", "Откусить себе ногу"]
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        tasks: [...state.tasks, action.payload.task]
      };
    case REMOVE_TODO:
      return {
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
