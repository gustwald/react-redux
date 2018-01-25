import { ADD_TODO } from '../constants/action-types';
import { TOGGLE_TODO } from '../constants/action-types';

let nextTodoId = 0

export const addTodo = todo => ({ 
    type: ADD_TODO, payload: todo, id: nextTodoId++, completed: false
});

export const toggleTodo = id => { 
    return{
    type: TOGGLE_TODO, id
    }
};