import React from 'react';
import './TodoItem.css'

function TodoItem(props) {
  const onDelete = () => {
    console.log('se borró con éxito la tarea', props.text)
  }

  return (
    <li className="TodoItem">
    <span
      className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
      onClick={props.onComplete}  
    >
      √
    </span>
    <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
      {props.text}
    </p>
    <span
      className="Icon Icon-delete"
      onClick={props.onDelete}  
    >
      X
    </span>
  </li>
  )
}

export { TodoItem };