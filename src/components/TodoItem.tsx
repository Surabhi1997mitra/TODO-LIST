// This component will display individual to-do items.

import React from 'react';
import { ListItem, ListItemText, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

interface TodoItemProps {
    todo: {
        name: string,
        color: string
    },
    index: number,
    removeTodo: (index: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, index, removeTodo }) => {
    return (
        <ListItem style={{ borderRadius: 10, margin: "1rem 0", border: "1px solid grey", padding: 0 }}>
            <div style={{ width: 30, height: 50, marginRight: 10, borderRadius: "10px 0 0 10px", background: todo.color }}></div>
            <ListItemText primary={todo.name} />
            {/* <IconButton edge="end" onClick={() => removeTodo(index)} style={{ marginRight: 5 }}>
                <EditIcon />
            </IconButton> */}
            <IconButton edge="end" onClick={() => removeTodo(index)} style={{ marginRight: 5 }}>
                <DeleteIcon />
            </IconButton>
        </ListItem>
    )
}

export default TodoItem;