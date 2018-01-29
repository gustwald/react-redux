import { ADD_TODO } from '../constants/action-types';
import { TOGGLE_TODO } from '../constants/action-types';
import { COMMENT_TODO } from '../constants/action-types';

export const addTodo = (id, todo) => { 
    return{
    type: ADD_TODO, payload: todo, id: id, completed: false, comments: []
    }
};

export const toggleTodo = id => { 
    return{
    type: TOGGLE_TODO, 
    id: id
    }
};

export const commentTodo = (id, comment) => { 
    return{
    type: COMMENT_TODO, id: id, comment: comment
    }
};