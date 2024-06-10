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

    const [editIndex, setEditIndex] = useState<number | null>(null);

    const addTodo = (todo: { name: string, color: string }) => {
        setTodos([...todos, todo]);
    };

    const removeTodo = (index: number) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    const editTodo = (index: number, updatedTodo: string) => {
        const newTodos = todos.map((todo: { name: string, color: string }, idx) => {
            if(idx === index) return { name: updatedTodo, color: todo.color }
            else return todo;
        })
        setTodos(newTodos);
    }

    return (
        <div>
            <TodoForm addTodo={addTodo} />
            <List style={{ maxHeight: "60vh", paddingRight: 20, overflow: "auto"}}>
                {todos.map((todo, index) => {
                    return (
                        <TodoItem 
                            todo={todo} 
                            index={index} 
                            removeTodo={removeTodo} 
                            editTodo={editTodo} 
                            editIndex={editIndex}
                            setEditIndex={setEditIndex}
                        />
                    )
                })}
            </List>
        </div>
    )
}

export default TodoList;