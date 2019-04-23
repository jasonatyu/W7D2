import React from 'react';
import { receiveTodo } from '../../actions/todo_actions';

const TodoListItem = ({todo, removeTodo, receiveTodo}) => {
    return (
        <>
            <li>{todo.title}</li>
            <button onClick={() => removeTodo(todo)}>Remove Todo</button>
            <button onClick={() => receiveTodo(flipTodo(todo))}>{todo.done === true ? "Undo" : "Done"}</button>
        </>
    )
};

function flipTodo(todo) {
    let newTodo = Object.assign({}, todo)
    if (newTodo.done === false) {
        newTodo.done = true; 
    } else {
        newTodo.done = false; 
    }
    return newTodo;
}

export default TodoListItem;