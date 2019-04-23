import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
    componentDidMount() {
        this.props.fetchTodos();
    }

    render() {
        return (
        <>
            <ul>
                {this.props.todos.map((todo) => {
                    return <TodoListItem key={todo.id} todo={todo} removeTodo={this.props.removeTodo} receiveTodo={this.props.receiveTodo}/>
                })}
            </ul>
            <TodoForm createTodo={this.props.createTodo}/>
                <div className="errors">{this.props.errors.length === 0 ? "" : this.props.errors.join(", ")}</div>
        </>
        )
    }
};

export default TodoList;