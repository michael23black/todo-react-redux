export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const addTask = task => {
  return {
    type: ADD_TODO,
    payload: {
      task
    }
  };
};
export const removeTask = index => {
  return {
    type: REMOVE_TODO,
    payload: {
      index
    }
  };
};
