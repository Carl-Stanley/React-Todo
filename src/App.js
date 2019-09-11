import React, {Component} from 'react';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';
import TodoForm from './components/TodoComponents/TodoForm';


const taskList = [
  {
    task: 'O-Ren Ishii',
    id: 1528817077286,
    complete: false
  },
  {
    task: 'Bill',
    id: 1528817084358,
    complete: false
  },
  {
    task: 'Vernita Green',
    id: 1528817111786,
    complete: false
  }
]

export default class App extends Component {
  constructor() {
    super()
    
    this.state = {
    
      taskList
   
    }
  
  }
  
  clear = event => {
     
    this.setState({

      taskList: this.state.taskList.filter(item => !item.complete)
    
    })
  }
  

  toggleItem = itemId => {
    this.setState({
      taskList: this.state.taskList.map(item => {
        if (item.id === itemId) {
          return { ...item, complete: !item.complete }
        }
       
        return item
      })
    })
  }

  addtoList = (event, itemName) => {
     
    const existing = this.state.taskList.filter(item => item.name === itemName)

    if (existing.length === 0) {
      
      const newItem = {
    
        task: itemName,
    
        id: Date.now(),
    
        complete: false
    
      }
    
      this.setState({
        taskList: [...this.state.taskList, newItem]
      })
    }
  }

  render() {
    
    return (
      
      <div className='App'>
        
        <h1>The To Do List</h1>
        
        <TodoForm  />
        
        <TodoList

        addtoList={this.addtoList} 

        toggleItem={this.toggleItem}

        taskList={this.state.taskList}       
               
        clearList={this.clear}
        
        />
      
      </div>
    )
  }
}