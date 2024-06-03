// This component will display individual to-do items.

import React from 'react';
import { ListItem, ListItemText, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

interface TodoItemProps {
    todo: string,
    index: number, 
    removeTodo : (index: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, index, removeTodo }) => {
    return (
        <ListItem>
            <ListItemText primary={todo} />
            <IconButton edge="end" onClick={() => removeTodo(index)}>
                <DeleteIcon />
            </IconButton>
        </ListItem>
    )
}

export default TodoItem;