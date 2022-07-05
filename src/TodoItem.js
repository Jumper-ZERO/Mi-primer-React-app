import React from 'react';
import './TodoItem.css';

function TodoItem(props) {

  return (
    <li className="TodoItem">
      <span 
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
        √
      </span>
      <input 
      className={
        `TodoItem-p ${props.completed && 'TodoItem-p--complete'}`
        }
      value={props.text_content}
      readOnly
      />
      <span 
        className="Icon Icon-delete"
        onClick={props.onDelete}
        >
        X
      </span>
    </li>
  );
}

export { TodoItem };