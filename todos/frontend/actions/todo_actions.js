export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = "REMOVE_TODO";
import * as APIUtil from '../utils/todo_api_util';
import { receiveErrors, clearErrors, RECEIVE_ERRORS, CLEAR_ERRORS } from './error_actions';

export const receiveTodos = (todos) => {
    return {
        type: RECEIVE_TODOS,
        todos 
    }
}

export const receiveTodo = (todo) => {
    return {
        type: RECEIVE_TODO,
        todo
    }
}

export const removeTodo = (todo) => {
    return {
        type: REMOVE_TODO,
        todo
    }
}

export const fetchTodos = () => (dispatch) => {
    return APIUtil.fetchTodos().then((res) => dispatch(receiveTodos(res)));
}

export const createTodo = (todo) => (dispatch) => {
    return APIUtil.createTodo(todo).then(
        (res) => dispatch(receiveTodo(res)),
        (err) => dispatch(receiveErrors(err.responseJSON))
        );
}