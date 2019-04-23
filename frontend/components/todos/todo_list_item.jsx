import React from 'react';

const TodoListItem = ({todo: {body, title, done}}) => {
    return (
        <li>{title}</li>
    )
};

export default TodoListItem;