import { combineReducers } from "redux";
import todo from "./reducers/todo";

const mainReducer = combineReducers({
  todo
});
export default mainReducer;
