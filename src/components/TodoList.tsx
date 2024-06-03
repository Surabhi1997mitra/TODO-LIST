// This component will manage the list of to-do items.

import React, { useState } from 'react';
import { List } from '@material-ui/core';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<{
        name: string,
        color: string
    }[]>([]);

    const addTodo = (todo: { name: string, color: string }) => {
        setTodos([...todos, todo]);
    };

    const removeTodo = (index: number) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div>
            <TodoForm addTodo={addTodo} />
            <List style={{ maxHeight: "60vh", paddingRight: 20, overflow: "auto"}}>
                {todos.map((todo, index) => {
                    return (
                        <TodoItem todo={todo} index={index} removeTodo={removeTodo} />
                    )
                })}
            </List>
        </div>
    )
}

export default TodoList;