import React, { useState  } from 'react';
import { RiDeleteBinFill } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { VscCheckAll } from "react-icons/vsc";
import TodoForm from './TodoForm';
import './Todo.css';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {

  const [edit, setEdit] = useState({ id: null, value: '', dateTime: '' });

 const submitUpdate = value => {
    updateTodo(edit.id, value ,edit.dateTime);
    setEdit({
      id: null,
      value: '',
      dateTime: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }


  return todos.map((todo, index) => (
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index} >
      <div id='show-box'>
        <div key={todo.id}>
          {todo.text}

          <div className='icons'>
            <VscCheckAll
              onClick={() => completeTodo(todo.id)}
              title='Click me! If Complete TODO '
              className='complete-icon'
            />
            <RiDeleteBinFill
              onClick={() => removeTodo(todo.id)}
              title='Click me! If Delete TODO '
              className='delete-icon'
            />
            <TiEdit
              onClick={() => setEdit({ id: todo.id, value: todo.text ,dateTime: todo.dateTime})}
              title='Click me! If Edit TODO '
              className='edit-icon'
            />
          </div>
          {todo.dateTime}
        </div>
      </div>
    </div>
  ));
};


export default Todo;