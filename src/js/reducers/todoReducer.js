import { ADD_TODO } from "../constants/action-types";

const addTodoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default addTodoReducer;