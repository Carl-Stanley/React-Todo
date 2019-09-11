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
    task: 'Elle Driver',
    id: 1528817084348,
    complete: false
  },
  {
    task: 'Budd',
    id: 1528817084358,
    complete: false
  },
  {
    task: 'Vernita Green',
    id: 1528817111786,
    complete: false
  },
  {
    task: 'Kill Bill',
    id: 15288170845358,
    complete: false
  },
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
        
        <h1>Death List Five</h1>
        
        <TodoForm  />
        
        <TodoList

        addtoList={this.addtoList} 

        toggleItem={this.toggleItem}

        taskList={this.state.taskList}       
               
        clearList={this.clear}
        
        />
      
      <img src="https://m.media-amazon.com/images/M/MV5BNzM3NDFhYTAtYmU5Mi00NGRmLTljYjgtMDkyODQ4MjNkMGY2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg" width="auto" height="300px" alt="#"></img>

      </div>
    )
  }
}