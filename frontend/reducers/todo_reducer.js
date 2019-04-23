import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';
import merge from 'lodash/merge';

const initialState = {
    1: {
        id: 1,
        title: 'wash car',
        body: 'with soap',
        done: false
    },
    2: {
        id: 2,
        title: 'wash dog',
        body: 'with shampoo',
        done: true
    },
};

const todosReducer = (state = initialState, action) => {
    switch(action.type) {
        case RECEIVE_TODOS:
            const result = {}; 
            for (let i = 0; i < action.todos.length; i++) {
                result[action.todos[i].id] = action.todos[i];
            }
            return result;
        case RECEIVE_TODO:
            const newState = merge({}, state);
            newState[action.todo.id] = action.todo;
            return newState;
        default:
            return state;
    }
};

export default todosReducer; 