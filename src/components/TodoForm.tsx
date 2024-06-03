// This component will handle the input and submission of new to-do items.
import React, { useState } from 'react';
import { TextField, Button } from "@material-ui/core";

/*
Interfaces in TypeScript provide a way to define the shape of an object.
They are used to enforce a contract in your code, ensuring that certain objects have specific properties and methods. 
This can help with type checking and improving the readability and maintainability of your code.
TodoFormProps is an interface (or type alias) that defines the shape of the props expected by the TodoForm component.
It specifies what properties the props object must have and their respective types.
*/

interface TodoFormProps {
    addTodo: (todo: string) => void;
}

/*
The line React.FC<TodoFormProps> is used to define a React functional component with specific props in TypeScript. 
React.FC stands for React Functional Component. It is a generic type provided by React to define a functional component. 
The T in React.FC<T> is a placeholder for the type of the props that the component will receive.
*/
const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {

    const [input, setInput] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            addTodo(input);
            setInput('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                value={input}
                onChange={(e) => setInput(e.target.value)}
                label="New Todo Item"
                fullWidth
            />
            <Button type="submit" color="primary" variant="contained" style={{ marginTop: 50}}>
                Add Todo
            </Button>
        </form>
    )
}

export default TodoForm;