import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import './TodoList.css'
function TodoList() {
    const [todos, setTodos] = useState(() => {
        const localData = localStorage.getItem('todos');
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = todo => {
        if (!todo.text) {
            return;
        }
        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        // console.log(...todos);
    };
    const updateTodo = (todoId, newValue) => {
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };

    const removeTodo = id => {
            setTodos([...todos].filter(todo => todo.id !== id));
    };

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    return (
        <>
            <h1> Todos  Input </h1>
            <TodoForm onSubmit={addTodo} />
            <h2> Todos  List</h2>

            <Todo
                todos={todos} completeTodo={completeTodo}
                removeTodo={removeTodo} updateTodo={updateTodo}
            />
        </>
    );
}

export default TodoList;