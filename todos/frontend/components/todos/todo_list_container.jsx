import React from 'react';
import { connect } from 'react-redux';
import TodoList from './todo_list';
import { receiveTodos, receiveTodo, fetchTodos, createTodo, removeTodo } from '../../actions/todo_actions';
import { allTodos } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
    todos: allTodos(state),
    errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
    receiveTodo: (todo) => dispatch(receiveTodo(todo)),
    fetchTodos: () => dispatch(fetchTodos()),
    createTodo: (todo) => dispatch(createTodo(todo)),
    removeTodo: (todo) => dispatch(removeTodo(todo))
});

const TodoListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default TodoListContainer; 