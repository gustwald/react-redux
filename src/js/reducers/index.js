import { combineReducers } from "redux";
import addTodoReducer from "./todoReducer";

export default combineReducers({ todos: addTodoReducer });