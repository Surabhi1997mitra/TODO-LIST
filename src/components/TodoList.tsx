import React, { useState } from 'react';
import { List } from '@material-ui/core';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

// Define a specific type for the todo object
interface Todo {
    name: string;
    color: string;
}

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const [editIndex, setEditIndex] = useState<number | null>(null);

    const addTodo = (todo: Todo) => {
        setTodos([...todos, todo]);
    };

    const removeTodo = (index: number) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    const editTodo = (index: number, updatedTodo: string) => {
        const newTodos = todos.map((todo, idx) => {
            if (idx === index) return { name: updatedTodo, color: todo.color };
            else return todo;
        });
        setTodos(newTodos);
    };

    return (
        <div>
            <TodoForm addTodo={addTodo} />
            <List style={{ maxHeight: "60vh", paddingRight: 20, overflow: "auto" }}>
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
                    );
                })}
            </List>
        </div>
    )
}

export default TodoList;