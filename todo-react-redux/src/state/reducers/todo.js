/* Actions */
const ADD_TODO = "todo-react-redux/todo/ADD_TODO";
const REMOVE_TODO = "todo-react-redux/todo/REMOVE_TODO";

/* Initial State */
let id = 0;

let initialState = {
  tasks: [
    { id: id++, task: "Побрить кота" },
    { id: id++, task: "Откусить себе ногу" }
  ]
};

/* Reducer */
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        tasks: [...state.tasks, { id: id++, task: action.task }]
      };
    case REMOVE_TODO:
      return {
        ...state,
        tasks: [
          ...state.tasks.slice(0, action.index),
          ...state.tasks.slice(action.index + 1)
        ]
      };
    default:
      return state;
  }
}

/* Action Creators */
export function addTask(task) {
  return {
    type: ADD_TODO,
    task
  };
}
export function removeTask(index) {
  return {
    type: REMOVE_TODO,
    index
  };
}
