import { ADD_TODO, COMMENT_TODO } from "../constants/action-types";
import { TOGGLE_TODO } from "../constants/action-types";

const todoReducer = (state = [], action) => {

  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          payload: action.payload,
          completed: action.completed,
          comments: action.comments
        }
      ];
    case TOGGLE_TODO:
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case COMMENT_TODO:
      const selectedTodo = state.find(todo => todo.id === action.id);
      const selectedTodoComments = selectedTodo.comments;

      const updatedComments = [...selectedTodoComments, action.comment];

      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, comments: updatedComments } : todo
      );

    default:
      return state;
  }
};

export default todoReducer;
