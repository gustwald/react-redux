import { ADD_TODO } from '../constants/action-types';
import { TOGGLE_TODO } from '../constants/action-types';

const todoReducer = (state = [], action) => {
    const items = [];

  switch (action.type) {
    case ADD_TODO:
             return [...state, ...items,
                {
                     id: action.id,
                     payload: action.payload,
                     completed: action.completed,
                }
            ]
    case TOGGLE_TODO:
    return state.map(todo =>
        (todo.id === action.id) 
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state;
  }
};

export default todoReducer;
