import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { receiveTodos, receiveTodo, fetchTodos } from './actions/todo_actions';
import Root from './components/root';
import { allTodos } from './reducers/selectors';
import * as APIUtil from './utils/todo_api_util';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("content");
    const store = configureStore();
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    window.fetchTodos = fetchTodos;
    window.store = store;
    window.allTodos = allTodos;
    window.dispatch = store.dispatch;
    window.APIUtil = APIUtil;

    ReactDOM.render(<Root store={store}/>, root);
})