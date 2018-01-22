import { ADD_TODO } from '../constants/action-types';
import { DONE_TODO } from '../constants/action-types';

export const addTodo = todo => ({ type: ADD_TODO, payload: todo });
export const doneTodo = todo => ({ type: DONE_TODO, payload: todo });