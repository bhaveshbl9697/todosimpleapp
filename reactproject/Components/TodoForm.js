import React, { useState } from 'react';
import './TodoForm.css'
function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');
    const [cancelInputValue, setCancelInputValue] = useState("Value did not changes");

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleCancel = () => {
        setCancelInputValue("");
        console.log(cancelInputValue)
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 100),
            text: input
        });
        setInput('');
    };

    return (
        <form onSubmit={handleSubmit} className='todo-form'>
            {props.edit ? (
                <>
                    <input placeholder='Update Name of Todo'
                        value={input}
                        onChange={handleChange}
                        name='text'
                        className='todo-input update'
                        autoComplete="off"
                    />
                    <br />
                    <button onClick={handleSubmit} className='todo-button update' title="To update the Todo">Update</button>
                    <button type="submit" onClick={handleCancel} className='todo-button cancel' title="To Cancel Edit Operation">Cancel</button>
                </>
            ) : (
                <>
                    <div id='main-add-div'>
                        <input
                            placeholder='Tell Me,What you Have to Do?'
                            value={input}
                            onChange={handleChange}
                            name='text'
                            className='todo-input add'
                            autoComplete="off"

                        />
                        <br />
                        <button onClick={handleSubmit} className='todo-button' title="To add Todo,Click me">
                            Add Todo into List
                        </button>
                    </div>
                </>
            )}
        </form>
    );
}

export default TodoForm;