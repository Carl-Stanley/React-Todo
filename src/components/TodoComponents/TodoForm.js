import React, { Component } from 'react'
import styled from 'styled-components'

const StyledTextArea = styled.textarea ``;

class TodoForm extends Component {

    constructor() {

    super()

    this.state = {

        itemName: ''
    }
  }

  handleChanges = event => {

    this.setState({ itemName: event.target.value })

}

  handleSubmit = event => {
    this.props.addItem(event, this.state.itemName)
    
    this.setState({ itemName: '' })
  
}

  render() {
    return (
      <form onSubmit={this.handleSubmit} noValidate autoComplete='off'>
        
        <StyledTextArea

          value={this.state.itemName}
        
          onChange={this.handleChanges}
        
          className='text-field'
         
          label='Add A Task'
          
          type='text'
          
          name='item'
          
          placeholder='HIT Enter'

          
        />
      </form>
    )
  }
}

export default TodoForm