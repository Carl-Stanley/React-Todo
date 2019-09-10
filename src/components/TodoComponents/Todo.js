import React from 'react';

const Todo = props => {
  
    return (
    <div
  
    className={`item${props.item.complete ? ' complete' : ''}`}
  
    onClick={() => {
  
        props.toggleList(props.item.id)
  
    }}
  
  >
  
      <p>{props.item.task}</p>
  
    </div>
  )
}

export default Todo;