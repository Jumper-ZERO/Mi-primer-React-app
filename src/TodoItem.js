import React from 'react';
import './TodoItem.css';

function TodoItem(props) {

    const onComplete = () => {
        alert('Ya completaste el todo ' + props.text_content);
    }

    const onDelete = () => {
        alert('Borraste el todo' + props.text_content);
    }

  return (
    <li className="TodoItem">
      <span 
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={onComplete}
      >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text_content}
      </p>
      <span 
        className="Icon Icon-delete"
        onClick={onDelete}
        >
        X
      </span>
    </li>
  );
}

export { TodoItem };