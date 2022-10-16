import React, { useState , useEffect } from 'react';
import { RiDeleteBinFill } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { VscCheckAll } from "react-icons/vsc";
import TodoForm from './TodoForm';
import './Todo.css';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({ id: null, value: '' });
  const [dateTime, setDateTime] = useState(null);
  const CurrentDateTime = dateTime;
  const getCurrentDateTime = (dateAndTime) => {
          setDateTime(dateAndTime);
          console.log(dateAndTime);
  };

  useEffect(() => {
    let today = new Date();
    let dateAndTime = 'Date :: '+today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+'  Time ::'+today.getHours()+'-'+(today.getMinutes()+1)+'-'+today.getSeconds();
    getCurrentDateTime(dateAndTime);
  }, []);
  console.log(dateTime);
  

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
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
              onClick={() => setEdit({ id: todo.id, value: todo.text })}
              title='Click me! If Edit TODO '
              className='edit-icon'
            />
          </div>
          {CurrentDateTime}
        </div>
      </div>
    </div>
  ));
};


export default Todo;