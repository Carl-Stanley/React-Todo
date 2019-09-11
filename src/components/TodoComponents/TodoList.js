// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

const TodoList = props => {
  
    return (
    <>
      
      <button className='clear-btn' onClick={props.clearList}>
        
        Clear Finished Tasks
      
      </button>

      <button className='Submit-btn'>
        
       Submit New Tasks
      
      </button>
      
      <div className='to-do-list'>
        
        {props.taskList.map(item => (
        
        <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
        
        ))}
      
      </div>
    </>
  )
}

export default TodoList