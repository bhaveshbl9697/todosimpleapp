import React, { useState, useEffect } from 'react';
import './TodoForm.css'
function TodoForm ( props ) {
    const [ input, setInput ] = useState( props.edit ? props.edit.value : '' );
    const [ cancelInputValue, setCancelInputValue ] = useState( "Value did not changes" );

    const [ dateTime, setDateTime ] = useState( props.edit ? props.edit.value : null );

    let today = new Date();
    let dateAndTime = 'Date :- ' + today.getFullYear() + '-' + ( today.getMonth() + 1 ) + '-' + today.getDate() + '  Time :-' + today.getHours() + '-' + ( today.getMinutes() + 1 ) + '-' + today.getSeconds();

    useEffect( () => {
        setDateTime( dateAndTime );
    }, [ dateAndTime ] );

    const handleChange = e => {
        setInput( e.target.value );
    };

    const handleCancel = () => {
        setCancelInputValue( "" );
        console.log( cancelInputValue )
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit( {
            id: Math.floor( Math.random() * 100 ), //uuid 
            text: input,
            dateTime: dateTime
        } );
        setInput( '' );
    };

    return (
        <form onSubmit={ handleSubmit } className='todo-form'>
            { props.edit ? (
                <>
                    <input placeholder='Update Name of Todo'
                        value={ input }
                        onChange={ handleChange }
                        name='text'
                        className='todo-input update'
                        autoComplete="off"
                        title='You can Enter Updated Todo Title here'

                    />
                    <br />
                    <button onClick={ handleSubmit } className='todo-button update' title="To update the Todo">Update</button>
                    <button type="submit" onClick={ handleCancel } className='todo-button cancel' title="To Cancel Edit Operation">Cancel</button>
                </>
            ) : (
                <>
                    <div id='main-add-div'>
                        <input
                            placeholder='Tell Me,What you Have to Do?'
                            value={ input }
                            onChange={ handleChange }
                            name='text'
                            className='todo-input add'
                            autoComplete="off"
                            title='You can Enter Todo Title here'
                        />
                        <br />
                        <button onClick={ handleSubmit } className='todo-button' title="To add Todo,Click me">
                            Add Todo into List
                        </button>
                    </div>
                </>
            ) }
        </form>
    );
}

export default TodoForm;